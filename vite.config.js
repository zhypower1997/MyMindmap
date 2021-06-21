// @ts-check
import reactPlugin from 'vite-plugin-react'
const {
  resolve
} = require('path')
/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin],
  alias: {
    '/@/': resolve(__dirname, './src'),
    '/@component/': resolve(__dirname, './src/components'),

  }
}

export default config