/// <reference types="vitest/config" />
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const __dirname = path.resolve();

// https://vite.dev/config/
export default defineConfig({
    // build: {
    //     rollupOptions: {
    //         //
    //     },
    // },
    plugins: [react()],
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "./src/"),
        },
    },
    test: {
        include: [
            '**/*.{test,spec}.{js,jsx,ts,tsx}',
            '**/__tests__/**/*.{ts,tsx}',
        ],
    },
});
