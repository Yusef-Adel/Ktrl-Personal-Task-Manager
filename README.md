# Ktrl - Personal Task Manager

<div align="center">

![Ktrl Logo](public/vite.svg)

**A modern, feature-rich task management application built with React, TypeScript, and shadcn/ui**

[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## 📸 Screenshots

### 🌙 Dark Mode
![Dark Mode Interface](https://via.placeholder.com/1200x600/000000/FFFFFF?text=Dark+Mode+Screenshot)
*Clean, modern dark interface with smooth animations and intuitive controls*

### ☀️ Light Mode
![Light Mode Interface](https://via.placeholder.com/1200x600/FCFCFC/000000?text=Light+Mode+Screenshot)
*Bright, minimalist light theme with excellent readability*

### ⌨️ Keyboard Shortcuts
![Keyboard Shortcuts](https://via.placeholder.com/400x300/F5F5F5/000000?text=Keyboard+Shortcuts)
*Power user features with comprehensive keyboard navigation*

---

## 🎯 Overview

**Ktrl** is a personal task management system designed to help you stay organized and productive. Built with modern web technologies, it offers a seamless experience across all devices with a beautiful, responsive interface that adapts to your workflow.

Whether you're managing daily tasks, planning projects, or organizing your life, Ktrl provides the tools you need with an intuitive interface that gets out of your way.

---

## ✨ Key Features

### 🎨 **Beautiful UI/UX**
- **Dual Theme Support**: Seamless dark/light mode with animated transitions
- **Modern Design**: Built with shadcn/ui components and Geist font family
- **Smooth Animations**: Micro-interactions and transitions for enhanced user experience
- **Fully Responsive**: Works perfectly on mobile (320px+), tablet (768px+), and desktop (1024px+)

### 📋 **Task Management**
- **Quick Task Creation**: Add tasks with Enter key or click
- **Drag & Drop Reordering**: Intuitive task organization with smooth visual feedback
- **Task Editing**: Update task details, categories, and due dates inline
- **Completion Tracking**: Toggle task status with satisfying checkboxes
- **Smart Filtering**: Filter by All/Active/Completed with one click
- **Search Functionality**: Find tasks instantly with real-time search
- **Multiple Sort Options**: Sort by default, alphabetical, due date, or category

### 🏷️ **Categories**
- **Custom Categories**: Create unlimited color-coded categories
- **8 Preset Colors**: Choose from beautiful, accessible color palette
- **Category Assignment**: Assign categories during task creation or editing
- **Visual Tags**: Color-coded badges for easy task identification

### 📅 **Due Dates**
- **Visual Date Picker**: Full calendar with month/year navigation
- **Smart Highlighting**: Color-coded dates (red for overdue, gray for upcoming)
- **Date Formatting**: Clean, readable date display (e.g., "Nov 14, 2024")

### 📊 **Statistics Dashboard**
- **Real-time Stats**: Total, Active, Completed tasks, and Completion Rate
- **Visual Cards**: Beautiful stat cards with icons and hover effects
- **Progress Tracking**: Monitor your productivity at a glance

### ⌨️ **Keyboard Shortcuts**
Power user features for lightning-fast task management:
- `Ctrl/Cmd + K` - Focus search
- `Ctrl/Cmd + N` - New task
- `Ctrl/Cmd + D` - Toggle theme
- `Ctrl/Cmd + E` - Export tasks
- `Ctrl/Cmd + 1/2/3` - Filter All/Active/Completed

### 💾 **Data Export**
- **JSON Export**: Export all task data in JSON format
- **CSV Export**: Export to CSV for spreadsheet applications
- **Preserve Metadata**: Categories, due dates, and completion status included

### 🎭 **Additional Features**
- **Loading States**: Skeleton screens during data fetching
- **Error Handling**: Graceful error messages with retry options
- **Toast Notifications**: Real-time feedback for all actions
- **Accessibility**: Full ARIA labels and keyboard navigation
- **Local Storage**: Persistent categories and task metadata

---

## 🚀 Technology Stack

### **Core Technologies**
- **React 19** - Modern UI framework with functional components and hooks
- **TypeScript 5.9** - Type-safe development with full IDE support
- **Vite 7** - Lightning-fast build tool and dev server
- **Bun** - Ultra-fast JavaScript runtime and package manager

### **UI/UX**
- **shadcn/ui** - Professional, accessible component library
- **Tailwind CSS v4** - Utility-first CSS framework with CSS variables
- **Geist Font** - Modern, minimalist typography by Vercel
- **Lucide React** - Beautiful, consistent icon library
- **Framer Motion** - Smooth animations and transitions

### **State Management & Data**
- **React Hooks** - useState, useEffect, useCallback for state management
- **DummyJSON API** - Mock REST API for task operations
- **LocalStorage** - Client-side persistence for metadata

### **Utilities**
- **@dnd-kit** - Modern drag-and-drop with accessibility
- **date-fns** - Modern date utility library
- **react-day-picker** - Accessible date picker component
- **sonner** - Beautiful toast notifications
- **class-variance-authority** - Type-safe component variants
- **clsx & tailwind-merge** - Efficient className management

### **Development Tools**
- **ESLint** - Code quality and consistency
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

---

## 📦 Installation & Setup

### **Prerequisites**
- Node.js 18+ or Bun 1.0+
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git for cloning the repository

### **Quick Start**

```bash
# Clone the repository
git clone https://github.com/Yusef-Adel/Ktrl-Personal-Task-Manager.git
cd Ktrl-Personal-Task-Manager

# Install dependencies with Bun (recommended)
bun install

# Or with npm
npm install

# Or with yarn
yarn install

# Start development server
bun run dev

# Or with npm/yarn
npm run dev
# yarn dev
```

The application will start at **`http://localhost:5173`**

### **Build for Production**

```bash
# Build optimized production bundle
bun run build

# Preview production build locally
bun run preview

# Lint code
bun run lint
```

### **Project Structure**
```
Ktrl/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── TaskForm.tsx
│   │   ├── TaskItem.tsx
│   │   ├── TaskList.tsx
│   │   ├── FilterBar.tsx
│   │   ├── CategoryManager.tsx
│   │   └── ...
│   ├── hooks/             # Custom React hooks
│   │   ├── useTaskManager.ts
│   │   └── useKeyboardShortcuts.ts
│   ├── services/          # API services
│   │   └── api.ts
│   ├── utils/             # Utility functions
│   │   ├── storage.ts
│   │   └── helpers.ts
│   ├── types/             # TypeScript types
│   │   └── index.ts
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎨 Design Philosophy

### **Minimalist & Modern**
Ktrl embraces a clean, minimalist design inspired by modern productivity tools. Every element serves a purpose, and the interface gets out of your way to let you focus on what matters.

### **Responsive by Design**
Built with a mobile-first approach, Ktrl adapts seamlessly to any screen size:
- **Mobile (320px+)**: Optimized touch targets, stacked layouts
- **Tablet (768px+)**: Expanded features, side-by-side layouts
- **Desktop (1024px+)**: Full feature set, multi-column layouts

### **Accessibility First**
- Full keyboard navigation support
- ARIA labels on all interactive elements
- High contrast ratios for readability
- Focus indicators for keyboard users

---

## 💡 Usage Guide

### **Creating Your First Task**
1. Type your task in the input field
2. (Optional) Select a category from the dropdown
3. (Optional) Pick a due date from the calendar
4. Press Enter or click "Add Task"

### **Managing Tasks**
- **Complete**: Click the checkbox
- **Edit**: Click the pencil icon
- **Delete**: Click the trash icon
- **Reorder**: Drag the grip handle

### **Using Categories**
1. Click the `+` button in the Categories section
2. Enter a category name
3. Choose a color from the palette
4. Click "Add Category"

### **Keyboard Navigation**
Press the shortcuts mentioned in the Keyboard Shortcuts section for quick actions.

### **Exporting Data**
1. Click the settings gear icon (top right)
2. Select "Export as JSON" or "Export as CSV"
3. Your file will download automatically

---

## 🔒 Data & Privacy

### **Local-First**
All your data is stored locally in your browser:
- Tasks are fetched from DummyJSON API (mock data)
- Categories, metadata, and preferences are stored in localStorage
- No data is sent to external servers

### **No Account Required**
Start using Ktrl immediately - no sign-up, no email, no tracking.

---

## ⚠️ Known Limitations

1. **Mock API**: DummyJSON doesn't persist data - refresh loses fetched tasks
2. **Browser Storage**: Data is tied to your browser's localStorage
3. **Single User**: No multi-user support or cloud sync
4. **No Mobile App**: Web-only application (PWA coming soon)
5. **No Attachments**: Tasks are text-only (no file attachments)
6. **Limited Sorting**: No custom sort orders or saved views

---

## 🚀 Future Enhancements

### **Planned Features**
- [ ] **Backend Integration**: Real database with persistent storage
- [ ] **User Authentication**: Sign up, login, cloud sync
- [ ] **Collaboration**: Share tasks, team workspaces
- [ ] **Recurring Tasks**: Daily, weekly, monthly repeats
- [ ] **Priority Levels**: High, medium, low priority tasks
- [ ] **Subtasks**: Break down complex tasks
- [ ] **Tags**: Multiple tags per task
- [ ] **Calendar View**: Month/week/day calendar interface
- [ ] **Task Notes**: Rich text notes and attachments
- [ ] **Mobile App**: Native iOS/Android apps
- [ ] **Dark/Light/Auto**: System theme detection
- [ ] **Reminders**: Browser notifications for due tasks
- [ ] **Analytics**: Productivity insights and trends
- [ ] **Import**: Import tasks from other apps
- [ ] **API**: Public API for integrations

---

## 💭 Personal Reflection

### **Development Journey**

Building Ktrl has been an incredibly rewarding experience. What started as a simple task manager evolved into a comprehensive productivity tool that I'm genuinely proud of. 

**What I Learned:**
- Mastering modern React patterns (hooks, memo, context)
- Building accessible, responsive UIs with Tailwind CSS
- Implementing complex interactions (drag-and-drop, keyboard shortcuts)
- Managing state effectively without external libraries
- Creating smooth animations that enhance rather than distract

**Creative Expression:**
This project allowed me to express my creativity through thoughtful design decisions - from the color palette to the micro-interactions. Every animation, every transition, every hover effect was carefully crafted to create a delightful user experience.

**The Fun Part:**
Honestly, the most enjoyable aspect was adding those little touches that make the app feel alive - the smooth theme transitions, the satisfying checkbox animations, the subtle shadows that respond to user interaction. These details don't just look good; they make the app *feel* good to use.

**Looking Back:**
If I could do it again, I'd start with a proper backend from day one. But the constraints of using a mock API taught me valuable lessons about client-side state management and making the most of limited resources.

**Moving Forward:**
Ktrl is just the beginning. I'm excited to continue refining it, adding the planned features, and potentially turning it into a full-fledged productivity platform. This project has shown me that great software isn't just about features - it's about creating an experience that users enjoy.

---

## 🤝 Contributing

While this is a personal project, feedback and suggestions are always welcome! Feel free to:
- Open an issue for bugs or feature requests
- Star the repository if you find it useful
- Share your thoughts on improvements

---

## 📄 License

This project is licensed under the **MIT License** - feel free to use it for learning, personal projects, or as inspiration for your own work.

```
MIT License

Copyright (c) 2025 Yusef Adel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 🙏 Acknowledgments

Special thanks to:
- **[shadcn](https://twitter.com/shadcn)** for the incredible shadcn/ui component library
- **[Vercel](https://vercel.com)** for the beautiful Geist font family
- **[Lucide](https://lucide.dev)** for the consistent, beautiful icons
- **[DummyJSON](https://dummyjson.com)** for the mock API
- **[@dnd-kit](https://dndkit.com)** for the accessible drag-and-drop solution
- **[Tailwind CSS](https://tailwindcss.com)** for making styling enjoyable
- **The React team** for an amazing framework

---

## 📞 Connect

**GitHub**: [@Yusef-Adel](https://github.com/Yusef-Adel)  
**Repository**: [Ktrl-Personal-Task-Manager](https://github.com/Yusef-Adel/Ktrl-Personal-Task-Manager)

---

<div align="center">

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

⭐ Star this repo if you find it useful!

</div>

