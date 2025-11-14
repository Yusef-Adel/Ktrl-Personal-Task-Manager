# 🚀 Ktrl Setup Guide - Complete Instructions

This guide will walk you through setting up **Ktrl** on your local machine, step by step.

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation Steps](#installation-steps)
3. [Running the Application](#running-the-application)
4. [Browser Compatibility](#browser-compatibility)
5. [Troubleshooting](#troubleshooting)
6. [Deployment](#deployment)

---

## Prerequisites

### What You'll Need

Before starting, make sure you have these installed:

#### 1. **Node.js** (Required)
- **Version**: 18.0 or higher
- **Download**: https://nodejs.org/
- **Why**: Node.js is needed to run the development server and build tools

**To check if you have Node.js installed:**
```bash
node --version
```
You should see something like `v18.0.0` or higher.

#### 2. **Git** (Required)
- **Download**: https://git-scm.com/
- **Why**: To clone the repository from GitHub

**To check if you have Git installed:**
```bash
git --version
```

#### 3. **A Code Editor** (Recommended but optional)
- **VS Code**: https://code.visualstudio.com/ (Recommended)
- **WebStorm**, **Sublime Text**, or any text editor you prefer

#### 4. **A Modern Web Browser** (Required)
- ✅ **Chrome** 90+ (Recommended)
- ✅ **Firefox** 88+
- ✅ **Safari** 14+ (macOS/iOS)
- ✅ **Edge** 90+

---

## Installation Steps

### Step 1: Clone the Repository

Open your **Terminal** (Mac/Linux) or **Command Prompt/PowerShell** (Windows).

Navigate to where you want to save the project (e.g., Desktop, Documents):

```bash
# Navigate to your preferred location
cd Desktop

# Clone the repository
git clone https://github.com/Yusef-Adel/Ktrl-Personal-Task-Manager.git

# Navigate into the project folder
cd Ktrl-Personal-Task-Manager
```

### Step 2: Install Dependencies

Now we need to install all the required packages. You can use **npm** (comes with Node.js) or **bun** (faster alternative).

#### **Option A: Using npm (Most Common)**

```bash
npm install
```

This will take 1-3 minutes depending on your internet speed. You'll see a progress bar and lots of package names scrolling by - this is normal!

#### **Option B: Using Bun (Faster)**

If you have Bun installed:
```bash
bun install
```

**Don't have Bun?** That's fine! npm works perfectly. If you want to try Bun, install it from https://bun.sh/

### Step 3: Wait for Installation to Complete

You'll know installation is complete when you see:
```
added 234 packages, and audited 235 packages in 1m

found 0 vulnerabilities
```

---

## Running the Application

### Start the Development Server

After installation completes, start the local development server:

**Using npm:**
```bash
npm run dev
```

**Using Bun:**
```bash
bun run dev
```

### What to Expect

You should see output like this:

```
  VITE v7.2.2  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Open in Your Browser

1. Open your web browser
2. Go to: **http://localhost:5173**
3. 🎉 You should see the Ktrl application!

### Keeping the Server Running

**Important:** Keep the terminal window open while using the app. If you close it, the server stops.

To stop the server: Press `Ctrl + C` in the terminal.

---

## Browser Compatibility

### ✅ Tested and Supported Browsers

| Browser | Minimum Version | Performance | Notes |
|---------|----------------|-------------|-------|
| **Google Chrome** | 90+ | ⭐⭐⭐⭐⭐ Excellent | Best performance, recommended |
| **Mozilla Firefox** | 88+ | ⭐⭐⭐⭐⭐ Excellent | Full feature support |
| **Safari** | 14+ | ⭐⭐⭐⭐⭐ Excellent | Works great on Mac & iOS |
| **Microsoft Edge** | 90+ | ⭐⭐⭐⭐⭐ Excellent | Chromium-based, same as Chrome |
| **Opera** | 76+ | ⭐⭐⭐⭐ Very Good | Chromium-based |
| **Brave** | 1.25+ | ⭐⭐⭐⭐⭐ Excellent | Privacy-focused |

### 📱 Mobile Browser Support

The app is fully responsive and works on mobile devices:

- ✅ **Safari iOS** 14+ (iPhone/iPad)
- ✅ **Chrome Android**
- ✅ **Firefox Android**
- ✅ **Samsung Internet**

### Features & Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Task Management | ✅ | ✅ | ✅ | ✅ |
| Drag & Drop | ✅ | ✅ | ✅ | ✅ |
| Dark/Light Mode | ✅ | ✅ | ✅ | ✅ |
| LocalStorage | ✅ | ✅ | ✅ | ✅ |
| Touch Gestures (Mobile) | ✅ | ✅ | ✅ | ✅ |
| Color Picker | ✅ | ✅ | ✅ | ✅ |
| Keyboard Shortcuts | ✅ | ✅ | ✅ | ✅ |
| Calendar Date Picker | ✅ | ✅ | ✅ | ✅ |
| View Transitions | ✅ | ⚠️* | ⚠️* | ✅ |

*⚠️ View Transitions are a progressive enhancement - the app works perfectly without them, you just won't see the smooth theme transitions.

### ❌ Not Supported

- **Internet Explorer 11** - Microsoft ended support in 2022
- **Browsers older than 2020** - May have compatibility issues

---

## Troubleshooting

### Common Issues and Solutions

#### Issue 1: "command not found: node" or "node is not recognized"

**Problem**: Node.js is not installed or not in your system PATH.

**Solution**:
1. Download Node.js from https://nodejs.org/
2. Install it (use the LTS version)
3. Restart your terminal/command prompt
4. Try `node --version` again

---

#### Issue 2: "command not found: git" or "git is not recognized"

**Problem**: Git is not installed.

**Solution**:
1. Download Git from https://git-scm.com/
2. Install it (use default options)
3. Restart your terminal
4. Try `git --version` again

---

#### Issue 3: Port 5173 is Already in Use

**Problem**: Another application is using port 5173.

**Solution**: Vite will automatically try the next available port (5174, 5175, etc.). Check the terminal output for the actual URL.

Alternatively, stop the other application or specify a different port:
```bash
npm run dev -- --port 3000
```

---

#### Issue 4: Installation Fails with Permission Errors (Mac/Linux)

**Problem**: You see errors like `EACCES` or `permission denied`.

**Solution**: **DO NOT use sudo!** Instead, fix npm permissions:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

Then try `npm install` again.

---

#### Issue 5: "npm ERR! network" or Installation Hangs

**Problem**: Network issues or corrupted cache.

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Try installing again
npm install
```

If that doesn't work, try using your phone's hotspot or a different network.

---

#### Issue 6: App Shows Blank White/Black Screen

**Problem**: JavaScript is disabled or build issue.

**Solutions**:
1. **Hard refresh**: Press `Ctrl + Shift + R` (or `Cmd + Shift + R` on Mac)
2. **Clear cache**: `Ctrl + Shift + Delete`
3. **Check console**: Press `F12`, look for errors in Console tab
4. **Rebuild**: Stop server, run `npm run dev` again

---

#### Issue 7: Drag & Drop Not Working on Mobile

**Problem**: Touch gestures not registering.

**Solution**:
- Make sure you're using a supported browser (Safari iOS, Chrome Android)
- Try tapping and holding the grip icon (⋮⋮) for 200ms before dragging
- Refresh the page

---

#### Issue 8: Tasks Disappear After Refresh

**Problem**: This is expected behavior! The app uses a mock API (DummyJSON) for demonstration.

**Solution**: This is normal. The app shows:
- Sample tasks from the API (will reset on refresh)
- Your locally created tasks (persist in browser storage)
- Your categories (persist in browser storage)

For a production version, you'd need to integrate a real backend.

---

#### Issue 9: Theme Not Saving

**Problem**: Theme resets to light mode on refresh.

**Solution**: 
- Check if your browser allows localStorage
- Try in a non-incognito window
- Check browser settings for storage permissions

---

## Deployment

Ready to share your app with the world? Here's how to deploy it:

### Option 1: Vercel (Easiest, Free)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. Follow the prompts, and you'll get a live URL in seconds!

### Option 2: Netlify (Also Easy, Free)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

### Option 3: GitHub Pages

1. **Build:**
   ```bash
   npm run build
   ```

2. **Install gh-pages:**
   ```bash
   npm install -g gh-pages
   ```

3. **Deploy:**
   ```bash
   gh-pages -d dist
   ```

4. Enable GitHub Pages in your repository settings.

---

## Quick Reference

### Essential Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Clear npm cache (if issues)
npm cache clean --force
```

### Keyboard Shortcuts in the App

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + K` | Focus search |
| `Ctrl/Cmd + N` | New task |
| `Ctrl/Cmd + D` | Toggle theme |
| `Ctrl/Cmd + E` | Export tasks |
| `Ctrl/Cmd + 1` | Show all tasks |
| `Ctrl/Cmd + 2` | Show active tasks |
| `Ctrl/Cmd + 3` | Show completed tasks |

---

## Getting Help

If you're still stuck:

1. **Check the main README.md** for detailed documentation
2. **Check browser console** (F12) for error messages
3. **Try in a different browser** to isolate the issue
4. **Clear your cache and cookies**
5. **Reinstall dependencies**: Delete `node_modules` folder and run `npm install` again

---

## Next Steps

Now that Ktrl is running:

1. ✅ Create your first task
2. ✅ Add some categories
3. ✅ Try drag & drop reordering
4. ✅ Toggle between light and dark mode
5. ✅ Test keyboard shortcuts
6. ✅ Export your tasks to JSON/CSV
7. ✅ Explore the filter and sort options

---

## Summary Checklist

Before submitting your assessment, make sure:

- [ ] ✅ Node.js 18+ is installed
- [ ] ✅ Git is installed
- [ ] ✅ Repository is cloned successfully
- [ ] ✅ Dependencies installed without errors (`npm install`)
- [ ] ✅ Development server runs successfully (`npm run dev`)
- [ ] ✅ App opens at http://localhost:5173
- [ ] ✅ Tested in Chrome/Firefox/Safari (cross-browser compatibility)
- [ ] ✅ Mobile responsive design works (test at different screen sizes)
- [ ] ✅ All features working: add, edit, delete, drag & drop
- [ ] ✅ Dark/Light mode toggles correctly
- [ ] ✅ LocalStorage persists data
- [ ] ✅ No console errors in browser DevTools
- [ ] ✅ Production build succeeds (`npm run build`)
- [ ] ✅ (Optional) Deployed to hosting platform

---

**🎉 Congratulations! You're all set up and ready to use Ktrl!**

For more details, check the main [README.md](./README.md) file.

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
