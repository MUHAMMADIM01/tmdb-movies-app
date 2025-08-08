import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Edit wannan 'base' zuwa sunan repo ɗinka
export default defineConfig({
  plugins: [react()],
  base: '/tmdb-movies-app/'
})
