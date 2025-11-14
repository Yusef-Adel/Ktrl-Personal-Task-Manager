import { Search, Filter, ArrowUpDown, FileJson, FileSpreadsheet } from 'lucide-react';
import type { FilterType, SortType, Category } from '../types';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface FilterBarProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortType: SortType;
  onSortChange: (sort: SortType) => void;
  categories: Category[];
  selectedCategoryId?: string;
  onCategorySelect?: (categoryId: string) => void;
  onExportJSON?: () => void;
  onExportCSV?: () => void;
}

export const FilterBar = ({
  filter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  sortType,
  onSortChange,
  categories,
  selectedCategoryId,
  onCategorySelect,
  onExportJSON,
  onExportCSV,
}: FilterBarProps) => {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-3 sm:p-4 shadow-sm animate-in fade-in-50 duration-300">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors duration-200" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search tasks..."
            className="pl-9 transition-all duration-200 hover:border-ring/50 focus:shadow-md text-foreground"
            aria-label="Search tasks"
          />
        </div>

        <div className="flex flex-col sm:flex-row text-foreground gap-3 items-start sm:items-center justify-between">
          <div className="flex items-center gap-2 sm:hidden w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex-1">
                  <Filter className="h-4 w-4 mr-2" />
                  {filters.find(f => f.value === filter)?.label}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Filter Tasks</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {filters.map(({ value, label }) => (
                  <DropdownMenuItem
                    key={value}
                    onClick={() => onFilterChange(value)}
                    className={filter === value ? 'bg-accent' : ''}
                  >
                    {label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex-1">
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  {sortType === 'default' ? 'Default' : 
                   sortType === 'alphabetical' ? 'A-Z' :
                   sortType === 'dueDate' ? 'Due Date' : 'Category'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onSortChange('default')} className={sortType === 'default' ? 'bg-accent' : ''}>
                  Default
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onSortChange('alphabetical')} className={sortType === 'alphabetical' ? 'bg-accent' : ''}>
                  A-Z
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onSortChange('dueDate')} className={sortType === 'dueDate' ? 'bg-accent' : ''}>
                  Due Date
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onSortChange('category')} className={sortType === 'category' ? 'bg-accent' : ''}>
                  Category
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop: Original layout */}
          <div className="hidden sm:flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <Filter className="h-4 w-4 text-muted-foreground shrink-0" />
              <div className="flex gap-1 flex-1 min-w-0">
                {filters.map(({ value, label }) => (
                  <Button
                    key={value}
                    onClick={() => onFilterChange(value)}
                    variant={filter === value ? 'default' : 'secondary'}
                    size="sm"
                    className="transition-all duration-200 hover:scale-105 active:scale-95 flex-1 text-xs sm:text-sm"
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 flex-1 min-w-0 sm:flex-initial">
              <ArrowUpDown className="h-4 w-4 text-muted-foreground shrink-0" />
            <Select value={sortType} onValueChange={(value) => onSortChange(value as SortType)}>
              <SelectTrigger className="flex-1 sm:w-[140px] text-foreground text-xs sm:text-sm" aria-label="Sort tasks by">
                  <SelectValue className="text-foreground" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="alphabetical">A-Z</SelectItem>
                  <SelectItem value="dueDate">Due Date</SelectItem>
                  <SelectItem value="category">Category</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center text-foreground gap-2 w-full sm:w-auto">
            {onExportJSON && (
              <Button
                onClick={onExportJSON}
                variant="outline"
                size="sm"
                aria-label="Export tasks as JSON"
                className="transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
              >
                <FileJson className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Export as </span>JSON
              </Button>
            )}
            {onExportCSV && (
              <Button
                onClick={onExportCSV}
                variant="outline"
                size="sm"
                aria-label="Export tasks as CSV"
                className="transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
              >
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Export as</span>CSV
              </Button>
            )}
          </div>
        </div>

        {onCategorySelect && categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => onCategorySelect('')}
              variant={!selectedCategoryId ? 'default' : 'secondary'}
              size="sm"
            >
              All Categories
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                size="sm"
                variant="ghost"
                className="rounded-full"
                style={{
                  backgroundColor:
                    selectedCategoryId === category.id
                      ? category.color
                      : `${category.color}20`,
                  color:
                    selectedCategoryId === category.id
                      ? 'white'
                      : category.color,
                }}
              >
                {category.name}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
