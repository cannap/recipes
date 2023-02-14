import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  darkMode: 'class',
  content: ['nuxt.config.ts'],
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
