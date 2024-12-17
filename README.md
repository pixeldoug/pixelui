# Pixel UI

A collection of reusable UI components.

## Installation

### Vite

#### Require via NPM #
Make sure that you have Node.js and Tailwind CSS installed.

##### Add Tailwind and its configuration
Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files:

npm install -D tailwindcss postcss autoprefixer
 
npx tailwindcss init -p


##### Add this import header in your main css file, src/index.css in our case:

@tailwind base;
@tailwind components;
@tailwind utilities;
 
/* ... */

##### Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

```sh
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

##### Ensure your CSS file is imported in your entry
Make sure styles.css is imported in your entry file, which you do in main.tsx:

```sh
import './styles.css'; // Import Tailwind CSS

```sh
npm install my-ui-library