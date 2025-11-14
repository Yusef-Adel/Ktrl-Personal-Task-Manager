# Ktrl - Personal Task Manager

<div align="center">

![Ktrl Logo](public/vite.svg)

**A modern, feature-rich task management application built with React, TypeScript, and shadcn/ui**

[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

## 📸 Screenshots

### 🌙 Dark Mode

![Dark Mode](https://github.com/user-attachments/assets/e058532d-3d26-46c0-9ea3-10a9c15d8223)
_Clean, modern dark interface with smooth animations and intuitive controls_

### ☀️ Light Mode

![Light Mode Interface](<(https://github.com/user-attachments/assets/9609efb7-ccd2-4266-95e7-700d54c817a4)>)
_Bright, minimalist light theme with excellent readability_

### ⌨️ Keyboard Shortcuts

![Keyboard Shortcuts](https://ibb.co/tPFj6zBC)
_Power user features with comprehensive keyboard navigation_

### ⌨️ Category Submission

![Category Submission](https://github.com/user-attachments/assets/73da0172-0464-4ea1-8aa9-25785dc50c63)
_Power user features with comprehensive keyboard navigation_

### ⌨️ Category Edit

![Category Edit](https://github.com/user-attachments/assets/322da38b-519f-4c81-9ff0-95f70eaf1963)
_Power user features with comprehensive keyboard navigation_

### ⌨️ Task Edit

![Task Edit](https://github.com/user-attachments/assets/145a8991-562d-4975-8c39-d65915bffb5b)
_Power user features with comprehensive keyboard navigation_

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

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0 or higher) - [Download here](https://nodejs.org/)
  - To check your version: `node --version`
  - Alternatively, you can use **Bun** (version 1.0+) - [Download here](https://bun.sh/)
- **Git** - [Download here](https://git-scm.com/)
- **A modern web browser**:
  - ✅ Chrome/Chromium 90+ (Recommended)
  - ✅ Firefox 88+
  - ✅ Safari 14+
  - ✅ Edge 90+

### **Step-by-Step Installation Guide**

#### **1. Clone the Repository**

Open your terminal (Command Prompt, PowerShell, or Terminal) and run:

```bash
# Clone the repository
git clone https://github.com/Yusef-Adel/Ktrl-Personal-Task-Manager.git

# Navigate into the project directory
cd Ktrl-Personal-Task-Manager
```

#### **2. Install Dependencies**

Choose one of the following package managers:

**Option A: Using Bun (Recommended - Fastest)**

```bash
bun install
```

**Option B: Using npm (Most Common)**

```bash
npm install
```

**Option C: Using yarn**

```bash
yarn install
```

**Option D: Using pnpm**

```bash
pnpm install
```

> ⏱️ **Installation Time**: This typically takes 1-3 minutes depending on your internet speed and package manager.

#### **3. Start the Development Server**

After installation is complete, start the local development server:

**Using Bun:**

```bash
bun run dev
```

**Using npm:**

```bash
npm run dev
```

**Using yarn:**

```bash
yarn dev
```

**Using pnpm:**

```bash
pnpm dev
```

#### **4. Open the Application**

Once the server starts, you'll see output like this:

```
  VITE v7.2.2  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

**Open your browser and navigate to:** `http://localhost:5173`

🎉 **That's it!** The application should now be running locally on your machine.

---

### **Building for Production**

When you're ready to deploy the application:

```bash
# Build optimized production bundle
bun run build
# or: npm run build

# The build output will be in the 'dist' folder
```

To preview the production build locally:

```bash
bun run preview
# or: npm run preview

# Opens at http://localhost:4173
```

---

### **🌐 Cross-Browser Compatibility**

Ktrl is built with modern web standards and tested across all major browsers:

#### **✅ Fully Supported Browsers**

| Browser     | Minimum Version | Status       | Notes                          |
| ----------- | --------------- | ------------ | ------------------------------ |
| **Chrome**  | 90+             | ✅ Excellent | Recommended - Best performance |
| **Firefox** | 88+             | ✅ Excellent | Full feature support           |
| **Safari**  | 14+             | ✅ Excellent | macOS & iOS fully supported    |
| **Edge**    | 90+             | ✅ Excellent | Chromium-based, same as Chrome |
| **Opera**   | 76+             | ✅ Excellent | Chromium-based                 |
| **Brave**   | 1.25+           | ✅ Excellent | Privacy-focused, works great   |

#### **📱 Mobile Browser Support**

| Mobile Browser   | Status       | Notes                         |
| ---------------- | ------------ | ----------------------------- |
| Safari iOS 14+   | ✅ Excellent | Optimized for iPhone/iPad     |
| Chrome Android   | ✅ Excellent | Touch gestures work perfectly |
| Firefox Android  | ✅ Excellent | Full feature parity           |
| Samsung Internet | ✅ Good      | Chromium-based                |

#### **🛠️ Browser Features Used**

The application uses these modern web features:

- ✅ **CSS Variables (Custom Properties)** - Supported in all modern browsers
- ✅ **CSS Grid & Flexbox** - Full support across browsers
- ✅ **LocalStorage API** - Universal support
- ✅ **Fetch API** - Universal support
- ✅ **ES6+ JavaScript** - Transpiled for compatibility
- ✅ **Touch Events** - Full mobile support
- ✅ **Pointer Events** - Unified input handling
- ✅ **Color Input Type** - Native color picker (HTML5)
- ✅ **View Transitions API** - Progressive enhancement (Chrome 111+)

#### **⚠️ Known Browser Limitations**

1. **Internet Explorer 11**: ❌ Not supported (deprecated by Microsoft)
2. **Safari < 14**: Limited CSS variable support
3. **Firefox < 88**: Some CSS features may not work
4. **View Transitions**: Only works in Chrome 111+, gracefully degrades in other browsers

#### **🔧 Troubleshooting Browser Issues**

**If you experience issues:**

1. **Clear your browser cache**:

   - Chrome: `Ctrl/Cmd + Shift + Delete`
   - Firefox: `Ctrl/Cmd + Shift + Delete`
   - Safari: `Cmd + Option + E`

2. **Enable JavaScript**: Ensure JavaScript is enabled in your browser settings

3. **Update your browser**: Make sure you're running the latest version

4. **Try incognito/private mode**: Rules out extension conflicts

5. **Check console for errors**:
   - Open DevTools: `F12` or `Ctrl/Cmd + Shift + I`
   - Look for errors in the Console tab

---

### **🚀 Deployment Options**

Deploy your Ktrl instance to any static hosting provider:

#### **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### **Netlify**

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

#### **GitHub Pages**

1. Build the project: `npm run build`
2. Push the `dist` folder to your `gh-pages` branch
3. Enable GitHub Pages in repository settings

#### **Other Options**

- **Cloudflare Pages**
- **Firebase Hosting**
- **AWS S3 + CloudFront**
- **Render**
- **Railway**

All these platforms support static React applications out of the box.

---

### **🔍 Project Structure**

```
Ktrl/
├── public/                 # Static assets (favicon, images)
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components (Button, Input, etc.)
│   │   ├── TaskForm.tsx   # Task creation form
│   │   ├── TaskItem.tsx   # Individual task component
│   │   ├── TaskList.tsx   # Drag & drop task list
│   │   ├── FilterBar.tsx  # Search and filter controls
│   │   ├── CategoryManager.tsx  # Category CRUD
│   │   ├── TaskStatsCard.tsx    # Statistics display
│   │   ├── ThemeToggle.tsx      # Dark/light mode toggle
│   │   └── ...
│   ├── hooks/             # Custom React hooks
│   │   ├── useTaskManager.ts         # Task state management
│   │   └── useKeyboardShortcuts.ts   # Keyboard navigation
│   ├── services/          # API services
│   │   └── api.ts         # DummyJSON API integration
│   ├── utils/             # Utility functions
│   │   ├── storage.ts     # LocalStorage helpers
│   │   └── helpers.ts     # General utilities
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts       # Task, Category, Filter types
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # React entry point
│   └── index.css          # Global styles & Tailwind config
├── .gitignore
├── components.json         # shadcn/ui configuration
├── eslint.config.js        # ESLint configuration
├── package.json            # Dependencies & scripts
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── README.md              # This file!
```

---

### **⚙️ Available Scripts**

| Command           | Description                                         |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Start development server at `http://localhost:5173` |
| `npm run build`   | Build optimized production bundle to `dist/`        |
| `npm run preview` | Preview production build locally                    |
| `npm run lint`    | Run ESLint to check code quality                    |

---

### **🐛 Common Setup Issues**

#### **Issue: "command not found: npm" or "command not found: node"**

**Solution**: Node.js is not installed or not in your PATH. Download and install from [nodejs.org](https://nodejs.org/)

#### **Issue: Port 5173 is already in use**

**Solution**: Either close the application using that port, or Vite will automatically try the next available port (5174, 5175, etc.)

#### **Issue: EACCES permission errors (Linux/Mac)**

**Solution**: Don't use `sudo` with npm. Fix npm permissions:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

#### **Issue: Installation fails with network errors**

**Solution**:

```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

#### **Issue: Build fails with TypeScript errors**

**Solution**: Ensure TypeScript is installed correctly:

```bash
npm install -D typescript
npm run build
```

---

### **💡 First-Time User Guide**

Once the application is running:

1. **Create Your First Task**

   - Type in the "Add a new task..." input field
   - Press `Enter` or click "Add Task"

2. **Add a Category**

   - Scroll down to the "Categories" card
   - Click the `+` button
   - Enter a name and choose a color
   - Click "Add Category"

3. **Organize Your Tasks**

   - Drag tasks by the grip handle to reorder
   - Click the checkbox to mark as complete
   - Click the pencil icon to edit
   - Click the trash icon to delete

4. **Try Keyboard Shortcuts**

   - Press `Ctrl/Cmd + K` to focus search
   - Press `Ctrl/Cmd + N` to add new task
   - Press `Ctrl/Cmd + D` to toggle theme

5. **Explore Filters**
   - Use the filter buttons to show All/Active/Completed tasks
   - Try the search bar to find specific tasks
   - Sort tasks by different criteria

---

### **📊 System Requirements**

**Minimum:**

- **CPU**: Any modern processor (2010+)
- **RAM**: 2 GB
- **Storage**: 100 MB free space
- **Internet**: Required for initial setup and API calls
- **Screen**: 320px width minimum (mobile support)

**Recommended:**

- **CPU**: Dual-core processor or better
- **RAM**: 4 GB or more
- **Internet**: Broadband connection
- **Screen**: 1024px width or higher for best experience

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
Honestly, the most enjoyable aspect was adding those little touches that make the app feel alive - the smooth theme transitions, the satisfying checkbox animations, the subtle shadows that respond to user interaction. These details don't just look good; they make the app _feel_ good to use.

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
