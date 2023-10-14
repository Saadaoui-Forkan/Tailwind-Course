# Learning Tailwind CSS
### Installing
* npm install -D tailwindcss
* npx tailwindcss init
* tailwind.config.js
```
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
* index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
* npm run start
