import { useEffect, useRef, useState } from 'react';
import { Settings, Command, FileJson, FileSpreadsheet, Keyboard } from 'lucide-react';
import { toast } from 'sonner';
import { useTaskManager } from './hooks/useTaskManager';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { calculateTaskStats } from './utils/helpers';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { FilterBar } from './components/FilterBar';
import { ThemeToggle } from './components/ThemeToggle';
import { CategoryManager } from './components/CategoryManager';
import { TaskStatsCard } from './components/TaskStatsCard';
import { KeyboardShortcutsHelp } from './components/KeyboardShortcutsHelp';
import { TaskListSkeleton } from './components/TaskSkeleton';
import { ErrorMessage } from './components/ErrorMessage';
import { ScrollIndicator } from './components/ScrollIndicator';
import { Toaster } from './components/ui/sonner';
import { Button } from './components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './components/ui/dropdown-menu';
import { exportToJSON, exportToCSV } from './utils/helpers';
import './App.css';

function App() {
  const {
    tasks,
    allTasks,
    categories,
    loading,
    error,
    filter,
    searchQuery,
    sortType,
    setFilter,
    setSearchQuery,
    setSortType,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    reorderTasks,
    addCategory,
    updateCategory,
    deleteCategory,
    refreshTasks,
  } = useTaskManager();

  const [showShortcuts, setShowShortcuts] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const stats = calculateTaskStats(allTasks);

  const handleExportJSON = () => {
    try {
      exportToJSON(allTasks);
      toast.success('Tasks exported as JSON successfully');
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to export tasks');
    }
  };

  const handleExportCSV = () => {
    try {
      exportToCSV(allTasks);
      toast.success('Tasks exported as CSV successfully');
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to export tasks');
    }
  };

  useKeyboardShortcuts({
    'mod+k': () => {
      searchInputRef.current?.focus();
    },
    'mod+n': () => {
      document.querySelector<HTMLInputElement>('input[placeholder="Add a new task..."]')?.focus();
    },
    'mod+d': () => {
      document.querySelector<HTMLButtonElement>('button[aria-label*="mode"]')?.click();
    },
    'mod+e': () => {
      document.querySelector<HTMLButtonElement>('button:has(> span:contains("JSON"))')?.click();
    },
    'mod+1': () => setFilter('all'),
    'mod+2': () => setFilter('active'),
    'mod+3': () => setFilter('completed'),
  });

  useEffect(() => {
    const root = document.documentElement;
    const theme = localStorage.getItem('control_theme') || 'light';
    root.classList.toggle('dark', theme === 'dark');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Toaster richColors position="top-right" />
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <header className="mb-4 sm:mb-6 md:mb-8" role="banner">
          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">Ktrl</h1>
              <Command className="h-6 w-6 sm:h-8 sm:w-8 text-foreground" strokeWidth={2} />
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    aria-label="Open settings menu"
                    className="transition-all duration-200 hover:scale-110 hover:rotate-90"
                  >
                    <Settings className="h-5 w-5 transition-transform duration-300" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Settings</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleExportJSON}>
                    <FileJson className="mr-2 h-4 w-4" />
                    <span>Export as JSON</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleExportCSV}>
                    <FileSpreadsheet className="mr-2 h-4 w-4" />
                    <span>Export as CSV</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setShowShortcuts(!showShortcuts)}>
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>Keyboard Shortcuts</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base hidden sm:block">Your personal task management system</p>
        </header>

        <main role="main" className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          <div className="lg:col-span-2 space-y-6">
            <TaskForm
              onSubmit={addTask}
              categories={categories}
              loading={loading}
            />

            <FilterBar
              filter={filter}
              onFilterChange={setFilter}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortType={sortType}
              onSortChange={setSortType}
              categories={categories}
              onExportJSON={handleExportJSON}
              onExportCSV={handleExportCSV}
            />

            {error && <ErrorMessage message={error} onRetry={refreshTasks} />}

            {loading && !error ? (
              <TaskListSkeleton count={6} />
            ) : (
              <TaskList
                tasks={tasks}
                categories={categories}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onUpdate={updateTask}
                onReorder={reorderTasks}
                loading={loading}
              />
            )}
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <TaskStatsCard stats={stats} />
            
            <CategoryManager
              categories={categories}
              onAdd={addCategory}
              onUpdate={updateCategory}
              onDelete={deleteCategory}
            />

            {showShortcuts && <KeyboardShortcutsHelp />}
          </div>
        </main>

        <ScrollIndicator />
      </div>
    </div>
  );
}

export default App;

