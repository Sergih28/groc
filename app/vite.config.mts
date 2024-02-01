/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      reportsDirectory: './tests/coverage',
      exclude: [
        '**/.*',
        '*type*',
        '**/tests/*',
        '**/*.config.*',
        '**/*.stories.*',
        '**/*.types.ts*',
        '**/store/*',
      ],
      reporter: ['text', 'json', 'html'],
    },
    include: ['**/tests/unit/**/**.test.**'],
    exclude: ['**/*snapshot*/**'],
  },
  resolve: {
    alias: {
      '@atoms': path.resolve(__dirname, './src/components/ui/atoms'),
      '@molecules': path.resolve(__dirname, './src/components/ui/molecules'),
      '@organisms': path.resolve(__dirname, './src/components/ui/organisms'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@errors': path.resolve(__dirname, './src/errors'),
      '@i18n': path.resolve(__dirname, './src/i18n'),
      '@store': path.resolve(__dirname, './src/store/'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@data': path.resolve(__dirname, './src/data'),
      '@tests': path.resolve(__dirname, './tests/'),
    },
  },
})
