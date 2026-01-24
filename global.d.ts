// global.d.ts file to declare module for CSS files
// This allows TypeScript to understand imports of CSS files in the project.
// This one line declares solves the issue of missing type definitions for CSS modules.

// Wherever you import a CSS file, TypeScript will now treat it as a module.
// Common errors like "Cannot find module - with red threatning underlined './styles.css'" will be resolved.
declare module "*.css";
