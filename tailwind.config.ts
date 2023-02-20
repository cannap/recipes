import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  darkMode: 'class',

  theme: {
    colors: {
      primary: 'red'
    }
  },
  content: ['nuxt.config.ts'],
  plugins: [
    require('@tailwindcss/forms')
    // ...
  ]
}
