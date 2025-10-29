/**
 * 🔔 NOTIFICATION CONTEXT - SISTEMA NOTIFICHE GLOBALE
 * 
 * Questo Context gestisce tutte le notifiche dell'applicazione:
 * ✅ Multiple notifiche simultanee
 * ✅ Auto-dismiss configurabile
 * ✅ Azioni personalizzate (pulsanti)
 * ✅ Tipi di notifica (success, error, warning, info)
 * ✅ Persistenza notifiche importanti
 * ✅ Queue management per performance
 * ✅ TypeScript completo
 */

import { 
  createContext, 
  useContext, 
  useState, 
  ReactNode, 
  useCallback, 
  useEffect 
} from 'react';
import { 
  Notification, 
  NotificationContextType, 
  CreateNotificationInput,
  NotificationType 
} from '../types/Task';

// 🎯 ========== CONTEXT CREATION ==========

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

interface NotificationProviderProps {
  children: ReactNode;
  maxNotifications?: number;    // Massimo numero di notifiche visualizzate
  defaultDuration?: number;     // Durata default in ms
}

/**
 * NotificationProvider - Gestisce tutte le notifiche dell'app
 */
export function NotificationProvider({ 
  children, 
  maxNotifications = 5,
  defaultDuration = 5000 
}: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  /**
   * Genera un ID univoco per le notifiche
   */
  const generateNotificationId = (): string => {
    return `notification_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  /**
   * Aggiunge una nuova notifica
   */
  const addNotification = useCallback((notificationData: CreateNotificationInput): string => {
    const id = generateNotificationId();
    
    const notification: Notification = {
      id,
      duration: defaultDuration,
      persistent: false,
      createdAt: new Date(),
      ...notificationData
    };

    setNotifications(prev => {
      // Aggiungi nuova notifica e limita il numero massimo
      const newNotifications = [notification, ...prev].slice(0, maxNotifications);
      return newNotifications;
    });

    // Auto-dismiss se non è persistente e ha durata
    if (!notification.persistent && notification.duration && notification.duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, notification.duration);
    }

    return id;
  }, [defaultDuration, maxNotifications]);

  /**
   * Rimuove una notifica specifica
   */
  const removeNotification = useCallback((id: string): void => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  /**
   * Pulisce tutte le notifiche
   */
  const clearAllNotifications = useCallback((): void => {
    setNotifications([]);
  }, []);

  /**
   * Aggiorna una notifica esistente
   */
  const updateNotification = useCallback((id: string, updates: Partial<Notification>): void => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, ...updates }
          : notification
      )
    );
  }, []);

  // Cleanup automatico delle notifiche scadute
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setNotifications(prev =>
        prev.filter(notification => {
          if (notification.persistent) return true;
          if (!notification.duration) return true;
          
          const elapsed = now.getTime() - notification.createdAt.getTime();
          return elapsed < notification.duration;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const contextValue: NotificationContextType = {
    notifications,
    addNotification,
    removeNotification,
    clearAllNotifications,
    updateNotification
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
}

/**
 * Custom hook per utilizzare le notifiche
 */
export function useNotification(): NotificationContextType {
  const context = useContext(NotificationContext);
  
  if (context === undefined) {
    throw new Error(
      'useNotification deve essere utilizzato all\'interno di un NotificationProvider'
    );
  }
  
  return context;
}

/**
 * Custom hook con helper per tipi specifici di notifica
 */
export function useNotificationHelpers() {
  const { addNotification } = useNotification();

  return {
    /**
     * Mostra notifica di successo
     */
    showSuccess: useCallback((title: string, message: string, duration?: number) => 
      addNotification({ 
        type: 'success', 
        title, 
        message, 
        duration: duration || 4000 
      }), [addNotification]),
    
    /**
     * Mostra notifica di errore (più lunga)
     */
    showError: useCallback((title: string, message: string, duration?: number) => 
      addNotification({ 
        type: 'error', 
        title, 
        message, 
        duration: duration || 8000 
      }), [addNotification]),
    
    /**
     * Mostra notifica di warning
     */
    showWarning: useCallback((title: string, message: string, duration?: number) => 
      addNotification({ 
        type: 'warning', 
        title, 
        message, 
        duration: duration || 6000 
      }), [addNotification]),
    
    /**
     * Mostra notifica informativa
     */
    showInfo: useCallback((title: string, message: string, duration?: number) => 
      addNotification({ 
        type: 'info', 
        title, 
        message, 
        duration: duration || 5000 
      }), [addNotification]),

    /**
     * Mostra notifica persistente (non si chiude automaticamente)
     */
    showPersistent: useCallback((type: NotificationType, title: string, message: string) => 
      addNotification({ 
        type, 
        title, 
        message, 
        persistent: true 
      }), [addNotification]),

    /**
     * Mostra notifica con azione personalizzata
     */
    showWithAction: useCallback((
      type: NotificationType, 
      title: string, 
      message: string, 
      actionLabel: string, 
      actionHandler: () => void,
      duration?: number
    ) => 
      addNotification({ 
        type, 
        title, 
        message, 
        duration,
        action: {
          label: actionLabel,
          handler: actionHandler
        }
      }), [addNotification])
  };
}