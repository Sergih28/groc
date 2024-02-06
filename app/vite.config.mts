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
    setupFiles: './src/test/setup.ts',
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
    include: ['**/**.test.**'],
    exclude: ['**/*snapshot*/**', '**/node_modules/**'],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@features': path.resolve(__dirname, './src/features'),
      '@layouts': path.resolve(__dirname, './src/components/layouts'),
      '@organisms': path.resolve(__dirname, './src/components/ui/organisms'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@errors': path.resolve(__dirname, './src/errors'),
      '@i18n': path.resolve(__dirname, './src/services/api/i18n'),
      '@store': path.resolve(__dirname, './src/stores/'),
      '@services': path.resolve(__dirname, './src/services/'),
      '@lib': path.resolve(__dirname, './src/lib/'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@data': path.resolve(__dirname, './src/data'),
      '@tests': path.resolve(__dirname, './tests/'),
      '@test': path.resolve(__dirname, './src/test/'),
    },
  },
})
