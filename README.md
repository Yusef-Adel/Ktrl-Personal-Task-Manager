# Control - Personal Task Manager

A modern, feature-rich task management application built with React, TypeScript, and shadcn/ui. Control helps you efficiently manage your daily tasks with professional UI components, smooth drag-and-drop, and comprehensive features.

## ✨ Features

### Core Functionality
- **Task Management**: Create, edit, delete, and toggle completion status of tasks
- **Optimized Drag & Drop**: Smooth reordering with visual feedback and activation constraints
- **API Integration**: Full CRUD operations with DummyJSON API
- **Category System**: Create color-coded categories and assign them to tasks
- **Working Calendar**: Full date picker with month/year navigation for due dates
- **Theme Toggle**: Beautiful dark/light mode with persistence
- **Search & Filter**: Search tasks by text and filter by status (All/Active/Completed)
- **Sorting Options**: Sort by default order, alphabetical, due date, or category

### Bonus Features
- **Keyboard Shortcuts**: Power user features with keyboard navigation (Cmd/Ctrl + K, N, D, E, 1-3)
- **Export**: Export tasks to JSON or CSV format
- **Statistics**: View task completion rates and analytics
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Error Handling**: Graceful handling of API errors and network issues
- **Loading States**: Clear feedback during API operations

### UI/UX Excellence
- **shadcn/ui Components**: Professional, accessible component library
- **Inter Font**: Modern, minimalist typography with variable weights
- **Performance Optimized**: React.memo wrappers, efficient rendering, smooth 200ms transitions
- **Visual Feedback**: Loading spinners, drag overlays, hover states
- **Keyboard Navigation**: Full accessibility support

## 🚀 Tech Stack

- **React 19** - UI framework with functional components and hooks
- **TypeScript** - Type-safe development
- **shadcn/ui** - Professional component library
- **Tailwind CSS v4** - Utility-first CSS framework with OKLCH colors
- **@dnd-kit** - Modern drag-and-drop with optimizations
- **DummyJSON API** - RESTful API for task data
- **Vite** - Fast build tool and dev server
- **Bun** - Fast package manager
- **date-fns** - Modern date utility library
- **lucide-react** - Beautiful icon library
- **react-day-picker** - Accessible date picker component

## 📦 Installation

### Prerequisites
- Node.js 18+ or Bun 1.0+
- Modern web browser

### Setup
```bash
# Clone the repository
git clone <your-repo-url>
cd Ktrl

# Install dependencies (using Bun)
bun install

# Or using npm
npm install

# Start development server
bun run dev

# Or using npm
npm run dev
```

The application will be available at `http://localhost:5173`

## 🎯 Usage

### Basic Operations
1. **Add Task**: Type in the input field and press Enter or click "Add Task"
2. **Complete Task**: Click the checkbox next to a task
3. **Edit Task**: Click the edit icon to modify task details
4. **Delete Task**: Click the trash icon to remove a task
5. **Reorder Tasks**: Drag the grip icon to reorder tasks

### Keyboard Shortcuts
| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + K` | Focus search input |
| `Cmd/Ctrl + N` | Focus new task input |
| `Cmd/Ctrl + D` | Toggle dark/light mode |
| `Cmd/Ctrl + E` | Export tasks to JSON |
| `Cmd/Ctrl + 1` | Show all tasks |
| `Cmd/Ctrl + 2` | Show active tasks |
| `Cmd/Ctrl + 3` | Show completed tasks |

### Category Management
1. Click the "+" button in the Categories section
2. Enter category name
3. Select a color from the palette
4. Click "Add Category"

### Export Data
1. Click the settings icon (gear) in the header
2. Choose export format (JSON or CSV)
3. File will download automatically

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── TaskForm.tsx
│   ├── TaskItem.tsx
│   ├── TaskList.tsx
│   ├── FilterBar.tsx
│   ├── ThemeToggle.tsx
│   ├── CategoryManager.tsx
│   ├── TaskStatsCard.tsx
│   ├── ExportMenu.tsx
│   ├── KeyboardShortcutsHelp.tsx
│   ├── LoadingSpinner.tsx
│   └── ErrorMessage.tsx
├── hooks/              # Custom React hooks
│   ├── useTaskManager.ts
│   └── useKeyboardShortcuts.ts
├── services/           # External services
│   └── api.ts
├── utils/              # Utility functions
│   ├── storage.ts
│   └── helpers.ts
├── types/              # TypeScript types
│   └── index.ts
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Design System

### Color Palette
The app uses a custom OKLCH-based color system for consistent and beautiful colors:

- **Primary**: Vibrant yellow-green accent
- **Background**: Near white (light) / Dark charcoal (dark)
- **Secondary**: Light/medium gray
- **Destructive**: Coral red for delete actions

### Responsive Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🔧 API Integration

### DummyJSON API
Base URL: `https://dummyjson.com`

**Endpoints Used:**
- `GET /todos` - Fetch all tasks
- `POST /todos/add` - Create new task
- `PUT /todos/{id}` - Update task
- `DELETE /todos/{id}` - Delete task

**Note**: DummyJSON is a mock API. Task metadata (categories, due dates) is stored in localStorage for enhanced functionality.

## 💾 Data Persistence

### API-Managed
- Task titles and completion status

### localStorage-Managed
- Categories (CRUD operations)
- Task metadata (categories, due dates)
- Task order (drag-and-drop)
- Theme preference

## 🧪 Build & Deploy

```bash
# Build for production
bun run build

# Preview production build
bun run preview

# Lint code
bun run lint
```

## 🎯 Known Limitations

1. DummyJSON doesn't persist data - refresh loses fetched tasks
2. No user authentication system
3. No real backend for permanent data storage
4. No task sharing or collaboration features

## 🚀 Future Enhancements

- [ ] Real backend API integration
- [ ] User authentication
- [ ] Task attachments and notes
- [ ] Task priority levels
- [ ] Recurring tasks
- [ ] Push notifications
- [ ] Calendar view
- [ ] Team collaboration
- [ ] Mobile app

## 📝 Development Notes

For detailed development notes, architecture decisions, and technical documentation, see [context.md](./context.md).

## 📄 License

MIT License - feel free to use this project for learning or personal use.

## 🙏 Acknowledgments

- [DummyJSON](https://dummyjson.com) for the mock API
- [Lucide](https://lucide.dev) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com) for utility-first styling
- [@dnd-kit](https://dndkit.com) for drag-and-drop functionality

---

**Built with ❤️ using React and TypeScript**

