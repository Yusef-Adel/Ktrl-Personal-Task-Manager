import { Download, FileJson, FileText } from 'lucide-react';
import type { Task } from '../types';
import { exportToJSON, exportToCSV } from '../utils/helpers';
import { Button } from './ui/button';

interface ExportMenuProps {
  tasks: Task[];
}

export const ExportMenu = ({ tasks }: ExportMenuProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
        <Download className="h-5 w-5" />
        Export Tasks
      </h3>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button
          onClick={() => exportToJSON(tasks)}
          disabled={tasks.length === 0}
          className="w-full sm:w-auto"
        >
          <FileJson className="h-4 w-4" />
          <span>Export as JSON</span>
        </Button>
        <Button
          onClick={() => exportToCSV(tasks)}
          disabled={tasks.length === 0}
          variant="secondary"
          className="w-full sm:w-auto"
        >
          <FileText className="h-4 w-4" />
          <span>Export as CSV</span>
        </Button>
      </div>
    </div>
  );
};
