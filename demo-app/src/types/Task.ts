/**
 * 🎯 TIPI TYPESCRIPT COMPLETI PER IL CORSO REACT
 * 
 * Questo file definisce TUTTI i tipi dell'applicazione seguendo le best practices:
 * ✅ Interfacce per oggetti complessi
 * ✅ Union types per valori limitati
 * ✅ Optional properties con ?
 * ✅ Utility types (Omit, Partial, Pick)
 * ✅ Generic types per riusabilità
 * ✅ Enum per costanti
 */

// 📋 ========== ENTITÀ PRINCIPALI ==========

/**
 * Interfaccia principale per rappresentare un Task
 * 
 * Ogni task ha:
 * - id: identificatore univoco (UUID)
 * - title: titolo breve e descrittivo
 * - description: descrizione dettagliata (opzionale)
 * - completed: stato di completamento
 * - priority: livello di priorità (union type)
 * - category: categoria di appartenenza
 * - createdAt: timestamp di creazione
 * - dueDate: scadenza opzionale
 * - tags: array di etichette per filtraggio
 */
export interface Task {
  readonly id: string;                    // readonly = non modificabile dopo creazione
  title: string;                          // required - massimo 100 caratteri
  description?: string;                   // optional - descrizione estesa
  completed: boolean;                     // default false alla creazione
  priority: TaskPriority;                 // enum per type safety
  category: TaskCategory;                 // categoria predefinita
  createdAt: Date;                        // auto-generato alla creazione
  dueDate?: Date;                         // scadenza opzionale
  tags: string[];                         // array di stringhe per filtering
  updatedAt?: Date;                       // timestamp ultima modifica
  completedAt?: Date;                     // quando è stato completato
  estimatedMinutes?: number;              // durata stimata in minuti
}

/**
 * Enum per le priorità del task
 * Usando enum invece di union type per:
 * - Migliore autocomplete
 * - Validazione runtime
 * - Refactoring più sicuro
 */
export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent'                       // aggiunta priorità urgente
}

/**
 * Union type per le categorie
 * Alternativa agli enum quando i valori sono semplici
 */
export type TaskCategory = 
  | 'work'                                // lavoro
  | 'personal'                            // personale
  | 'shopping'                            // acquisti
  | 'health'                              // salute
  | 'learning'                            // apprendimento
  | 'other';                              // altro

/**
 * Interfaccia per le statistiche dei task
 * Calcolata dinamicamente dal TaskContext
 */
export interface TaskStats {
  readonly total: number;                 // totale task
  readonly completed: number;             // task completati
  readonly pending: number;               // task in sospeso
  readonly overdue: number;               // task scaduti
  readonly high_priority: number;         // task ad alta priorità
  readonly byCategory: Record<TaskCategory, number>;  // conteggio per categoria
  readonly completionRate: number;        // percentuale completamento (0-100)
  readonly averageCompletionTime?: number; // tempo medio completamento in giorni
}

/**
 * Interfaccia per filtri di ricerca e ordinamento
 * Usata per filtrare la lista task
 */
export interface TaskFilters {
  category?: TaskCategory;                // filtra per categoria
  priority?: TaskPriority;                // filtra per priorità
  completed?: boolean;                    // filtra per stato completamento
  searchQuery?: string;                   // ricerca testuale
  sortBy?: TaskSortField;                 // campo di ordinamento
  sortOrder?: 'asc' | 'desc';            // direzione ordinamento
  dueDateRange?: {                        // range date scadenza
    from?: Date;
    to?: Date;
  };
  tags?: string[];                        // filtra per tags
}

/**
 * Campi disponibili per l'ordinamento
 */
export type TaskSortField = 
  | 'createdAt'
  | 'dueDate'
  | 'title'
  | 'priority'
  | 'category'
  | 'completedAt';

// 👤 ========== UTENTE ==========

/**
 * Interfaccia per rappresentare un utente
 * In un'app reale verrebbe da autenticazione
 */
export interface User {
  readonly id: string;                    // UUID utente
  name: string;                           // nome completo
  email: string;                          // email univoca
  avatar?: string;                        // URL avatar opzionale
  preferences: UserPreferences;           // preferenze utente
  createdAt: Date;                        // data registrazione
  lastLogin?: Date;                       // ultimo accesso
}

/**
 * Preferenze utente per personalizzazione (versione semplificata)
 */
export interface UserPreferences {
  theme: 'light' | 'dark';                // tema preferito
  defaultCategory: TaskCategory;          // categoria default nuovi task
  defaultPriority: TaskPriority;          // priorità default
  notifications: {
    email: boolean;                       // notifiche email
    push: boolean;                        // notifiche push
    dueDateReminder: boolean;             // promemoria scadenze
    dailySummary: boolean;                // riassunto giornaliero
  };
  taskView: 'list' | 'grid' | 'kanban';  // modalità visualizzazione preferita
  language: 'it' | 'en' | 'es' | 'fr';   // lingua interfaccia
}

// 📱 ========== NOTIFICHE ==========

/**
 * Tipi di notifica disponibili
 */
export type NotificationType = 'success' | 'error' | 'warning' | 'info';

/**
 * Interfaccia per notifiche del sistema
 */
export interface Notification {
  readonly id: string;                    // UUID notifica
  type: NotificationType;                 // tipo visuale
  title: string;                          // titolo notifica
  message: string;                        // messaggio dettagliato
  duration?: number;                      // durata in ms (auto-dismiss)
  action?: {                              // azione opzionale
    label: string;                        // testo bottone
    handler: () => void;                  // funzione da eseguire
  };
  persistent?: boolean;                   // true = non auto-dismiss
  createdAt: Date;                        // timestamp creazione
}

// 🔄 ========== CONTEXT TYPES ==========

/**
 * Tipo per il TaskContext
 * Definisce tutte le operazioni disponibili sui task
 */
export interface TaskContextType {
  // State
  tasks: Task[];                          // lista completa task
  filters: TaskFilters;                   // filtri attivi
  loading: boolean;                       // stato caricamento
  error: string | null;                   // errore corrente

  // Task Operations
  addTask: (task: CreateTaskInput) => Promise<void>;
  updateTask: (id: string, updates: UpdateTaskInput) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  toggleTask: (id: string) => Promise<void>;
  duplicateTask: (id: string) => Promise<void>;

  // Bulk Operations
  deleteAllCompleted: () => Promise<void>;
  markAllAsCompleted: () => Promise<void>;
  deleteAllTasks: () => Promise<void>;

  // Filtering & Sorting
  updateFilters: (filters: Partial<TaskFilters>) => void;
  resetFilters: () => void;
  getFilteredTasks: () => Task[];
  
  // Statistics
  getStats: () => TaskStats;
  getTasksByCategory: () => Record<TaskCategory, Task[]>;
  getOverdueTasks: () => Task[];
  getUpcomingTasks: (days?: number) => Task[];

  // Import/Export
  exportTasks: (format: 'json' | 'csv') => Promise<string>;
  importTasks: (data: string, format: 'json' | 'csv') => Promise<void>;

  // Search
  searchTasks: (query: string) => Task[];
}

/**
 * Tipo per il ThemeContext (versione semplificata per corso base)
 */
export interface ThemeContextType {
  theme: 'light' | 'dark';               // tema corrente
  toggleTheme: () => void;               // toggle light/dark
}

/**
 * Tipo per il NotificationContext
 */
export interface NotificationContextType {
  notifications: Notification[];          // lista notifiche attive
  addNotification: (notification: CreateNotificationInput) => string;
  removeNotification: (id: string) => void;
  clearAllNotifications: () => void;
  updateNotification: (id: string, updates: Partial<Notification>) => void;
}

// 📝 ========== INPUT TYPES (per forms) ==========

/**
 * Input per creare un nuovo task (versione semplificata per corso base)
 * Omette campi auto-generati e rende opzionali quelli avanzati
 */
export type CreateTaskInput = {
  title: string;                          // titolo (obbligatorio)
  description?: string;                   // descrizione (opzionale)
  priority: TaskPriority;                 // priorità (obbligatorio)
  category: TaskCategory;                 // categoria (obbligatorio)
  dueDate?: Date;                         // scadenza (opzionale)
  tags?: string[];                        // tags (opzionale)
  estimatedTime?: number;                 // tempo stimato (opzionale)
};

/**
 * Input per aggiornare un task esistente
 * Tutti i campi sono opzionali tranne readonly
 */
export type UpdateTaskInput = Partial<Omit<Task, 'id' | 'createdAt'>>;

/**
 * Input per creare notifica
 */
export type CreateNotificationInput = Omit<Notification, 'id' | 'createdAt'>;

// 📋 ========== COMPONENT PROPS ==========

/**
 * Props del componente TaskItem
 * Mostra un singolo task nella lista
 */
export interface TaskItemProps {
  task: Task;                             // task da visualizzare
  onToggle: (id: string) => void;         // toggle completamento
  onDelete: (id: string) => void;         // elimina task
  onEdit: (id: string, updates: UpdateTaskInput) => void;  // modifica task
  onDuplicate?: (id: string) => void;     // duplica task (opzionale)
  showCategory?: boolean;                 // mostra categoria (default true)
  showDueDate?: boolean;                  // mostra scadenza (default true)
  showTags?: boolean;                     // mostra tags (default true)
  compact?: boolean;                      // modalità compatta
  draggable?: boolean;                    // abilitare drag & drop
}

/**
 * Props del componente TaskForm
 * Form per creare/modificare task
 */
export interface TaskFormProps {
  onSubmit?: (task: CreateTaskInput) => void; // callback submit (opzionale, usa context)
  initialValues?: Partial<CreateTaskInput>;   // valori iniziali per edit
  mode?: 'create' | 'edit';               // modalità form
  onCancel?: () => void;                  // callback annulla (solo edit)
  autoFocus?: boolean;                    // focus automatico primo campo
  showAdvancedFields?: boolean;           // mostra campi avanzati
}

/**
 * Props del componente Header
 */
export interface HeaderProps {
  onToggleTheme: () => void;              // toggle tema
  showStats?: boolean;                    // mostra statistiche in header
  showSearch?: boolean;                   // mostra barra ricerca
  showUserMenu?: boolean;                 // mostra menu utente
}

/**
 * Props del componente TaskList
 */
export interface TaskListProps {
  tasks?: Task[];                         // lista task (opzionale, usa context se non fornita)
  loading?: boolean;                      // stato caricamento
  error?: string | null;                  // errore corrente
  emptyMessage?: string;                  // messaggio lista vuota
  showFilters?: boolean;                  // mostra pannello filtri
  groupBy?: keyof Task;                   // raggruppa per campo
  virtualScrolling?: boolean;             // scroll virtuale per performance
}

/**
 * Props del componente TaskStats
 */
export interface TaskStatsProps {
  stats?: TaskStats;                      // statistiche (opzionale, usa context se non fornite)
  showDetailed?: boolean;                 // mostra statistiche dettagliate
  showCharts?: boolean;                   // mostra grafici
  period?: 'today' | 'week' | 'month' | 'year';  // periodo di riferimento
}

// 🔧 ========== UTILITY TYPES ==========

/**
 * Tipo per gestire stati asincroni
 */
export interface AsyncState<T> {
  data: T | null;                         // dati caricati
  loading: boolean;                       // stato caricamento
  error: string | null;                   // errore corrente
  lastFetch?: Date;                       // ultimo fetch
}

/**
 * Tipo per paginazione
 */
export interface PaginationState {
  page: number;                           // pagina corrente (0-based)
  pageSize: number;                       // elementi per pagina
  total: number;                          // totale elementi
  hasNextPage: boolean;                   // ha pagina successiva
  hasPrevPage: boolean;                   // ha pagina precedente
}

/**
 * Tipo per API Response generica
 */
export interface ApiResponse<T> {
  data: T;                                // payload
  message?: string;                       // messaggio opzionale
  success: boolean;                       // successo operazione
  timestamp: Date;                        // timestamp response
  metadata?: {                            // metadati opzionali
    pagination?: PaginationState;
    filters?: TaskFilters;
    sort?: {
      field: string;
      order: 'asc' | 'desc';
    };
  };
}

/**
 * Tipo per errori API
 * Classe invece di interface per poter essere istanziata
 */
export class ApiError extends Error {
  public readonly code: string;
  public readonly details?: any;
  public readonly timestamp: Date;

  constructor(code: string, message: string, details?: any, timestamp?: Date) {
    super(message);
    this.name = 'ApiError';
    this.code = code;
    this.details = details;
    this.timestamp = timestamp || new Date();
    
    // Mantiene stack trace corretto (Node.js)
    if (typeof (Error as any).captureStackTrace === 'function') {
      (Error as any).captureStackTrace(this, ApiError);
    }
  }
}

// 🧪 ========== MOCK DATA TYPES ==========

/**
 * Configurazione per generare mock data
 */
export interface MockDataConfig {
  taskCount: number;                      // numero task da generare
  categories: TaskCategory[];             // categorie da usare
  priorities: TaskPriority[];             // priorità da usare
  withDueDates: boolean;                  // include scadenze
  completedRatio: number;                 // percentuale completati (0-1)
  tagsPool: string[];                     // pool di tags disponibili
}

/**
 * Seed per generazione deterministica
 */
export interface MockDataSeed {
  userSeed: string;                       // seed per dati utente
  taskSeed: string;                       // seed per task
  notificationSeed: string;               // seed per notifiche
}