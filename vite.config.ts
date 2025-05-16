import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/CogniCode_Website/', // <-- ✅ this is required
  plugins: [
    react(),
    tailwindcss(),
  ],

})



