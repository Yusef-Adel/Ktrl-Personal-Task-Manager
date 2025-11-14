import { Keyboard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const KeyboardShortcutsHelp = () => {
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const modKey = isMac ? '⌘' : 'Ctrl';

  const shortcuts = [
    { keys: `${modKey} + K`, description: 'Focus search' },
    { keys: `${modKey} + N`, description: 'New task' },
    { keys: `${modKey} + D`, description: 'Toggle theme' },
    { keys: `${modKey} + E`, description: 'Export tasks' },
    { keys: `${modKey} + 1/2/3`, description: 'Filter: All/Active/Completed' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Keyboard size={20} />
          Keyboard Shortcuts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {shortcuts.map((shortcut, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-sm py-2 border-b border-border last:border-b-0"
          >
            <span className="text-muted-foreground">{shortcut.description}</span>
            <kbd className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-mono">
              {shortcut.keys}
            </kbd>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
