import { useState } from 'react';
import { Plus, Edit2, Trash2, X, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import type { Category } from '../types';

interface CategoryManagerProps {
  categories: Category[];
  onAdd: (category: Category) => void;
  onUpdate: (id: string, updates: Partial<Category>) => void;
  onDelete: (id: string) => void;
}

const PRESET_COLORS = [
  '#EF4444',
  '#F59E0B',
  '#10B981',
  '#3B82F6',
  '#8B5CF6',
  '#EC4899',
  '#6366F1',
  '#14B8A6',
];

export const CategoryManager = ({
  categories,
  onAdd,
  onUpdate,
  onDelete,
}: CategoryManagerProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newName, setNewName] = useState('');
  const [newColor, setNewColor] = useState(PRESET_COLORS[0]);
  const [editName, setEditName] = useState('');
  const [editColor, setEditColor] = useState('');

  const handleAdd = () => {
    if (!newName.trim()) return;

    onAdd({
      id: Date.now().toString(),
      name: newName.trim(),
      color: newColor,
    });

    setNewName('');
    setNewColor(PRESET_COLORS[0]);
    setIsAdding(false);
  };

  const handleEdit = (category: Category) => {
    setEditingId(category.id);
    setEditName(category.name);
    setEditColor(category.color);
  };

  const handleSaveEdit = () => {
    if (!editName.trim() || !editingId) return;

    onUpdate(editingId, {
      name: editName.trim(),
      color: editColor,
    });

    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditName('');
    setEditColor('');
  };

  return (
    <Card className="p-6 sm:p-6 animate-in fade-in-50 duration-300">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Categories</h3>
        <Button
          onClick={() => setIsAdding(!isAdding)}
          size="icon"
          variant="default"
          aria-label={isAdding ? 'Cancel adding category' : 'Add new category'}
        >
          {isAdding ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </Button>
      </div>

      {isAdding && (
        <div className="mb-4 p-3 bg-secondary rounded-md animate-in fade-in-50 slide-in-from-top-2 duration-200">
          <Input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Category name..."
            className="mb-2"
            autoFocus
            aria-label="New category name"
          />
          <div className="flex gap-1.5 sm:gap-2 mb-3 flex-wrap">
            {PRESET_COLORS.map((color) => (
              <button
                key={color}
                onClick={() => setNewColor(color)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-transform cursor-pointer hover:scale-105 ${
                  newColor === color ? 'scale-110 ring-2 ring-ring' : ''
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
          <Button
            onClick={handleAdd}
            disabled={!newName.trim()}
            className="w-full transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Add Category
          </Button>
        </div>
      )}

      <div className="space-y-1.5 sm:space-y-2">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="flex items-center gap-2 p-2 px-4 rounded-md bg-secondary animate-in fade-in-50 slide-in-from-left-2"
            style={{ animationDelay: `${index * 30}ms`, animationFillMode: 'backwards' }}
          >
            {editingId === category.id ? (
              <>
                <div className="flex-1">
                  <Input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="mb-2"
                  />
                  <div className="flex gap-1 flex-wrap">
                    {PRESET_COLORS.map((color) => (
                      <button
                        key={color}
                        onClick={() => setEditColor(color)}
                        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-transform cursor-pointer hover:scale-105 ${
                          editColor === color ? 'scale-110 ring-2 ring-ring' : ''
                        }`}
                        style={{ backgroundColor: color }}
                        aria-label={`Select color ${color}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button
                    onClick={handleSaveEdit}
                    variant="ghost"
                    size="icon"
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={handleCancelEdit}
                    variant="ghost"
                    size="icon"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div
                  className="w-4 h-4 rounded-full shrink-0"
                  style={{ backgroundColor: category.color }}
                />
                <span className="flex-1 text-sm text-foreground">
                  {category.name}
                </span>
                <Button
                  onClick={() => handleEdit(category)}
                  variant="ghost"
                  size="icon"
                  aria-label={`Edit category ${category.name}`}
                >
                  <Edit2 className="h-3.5 w-3.5" />
                </Button>
                <Button
                  onClick={() => onDelete(category.id)}
                  variant="ghost"
                  size="icon"
                  aria-label={`Delete category ${category.name}`}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};
