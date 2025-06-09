# React Practice Project
This project is a hands-on implementation of core React Hooks concepts and modern UI/UX patterns using React, Tailwind CSS v4, and Vite. It demonstrates state management, theming, routing, and responsive design.

## Features
1. **Counter**
   - Interactive counter with increment and decrement functionality.
   - Demonstrates batching in React state updates.
2. **Background Color Changer**
   - Dynamically change the background color using buttons.
   - Showcases conditional rendering and state updates.
3. **Password Generator**
   - Generates passwords based on user preferences (length, numbers, symbols, lowercase).
   - Uses `useState`, `useCallback`, and `useRef` for logic and clipboard copy.
4. **Responsive Navbar**
   - Fixed, gradient navbar with animated hamburger menu for mobile.
   - Uses React Router for navigation.
5. **Theme Toggler (Light/Dark Mode)**
   - Toggle between light and dark themes using a context-based approach.
   - Fully integrated with Tailwind CSS v4’s dark mode.
6. **Reusable Theme Card**
   - Example product card with dark/light styling.

## Tech Stack
- **React** (with hooks: `useState`, `useEffect`, `useCallback`, `useRef`, `useContext`)
- **React Router DOM** for SPA navigation
- **Tailwind CSS v4** for utility-first styling and dark mode
- **Vite** for fast development and build

## Hooks & Concepts Used
- `useState` — local component state
- `useEffect` — side effects and DOM/class manipulation
- `useCallback` — memoized functions
- `useRef` — direct DOM access
- `useContext` — theme context for dark/light mode

## Notes
- Tailwind CSS v4 auto-injects all layers; no need for `@tailwind` directives in your CSS.
- Dark mode is enabled via the `class` strategy in `tailwind.config.js`.
- The Navbar is present on all pages using a layout route.