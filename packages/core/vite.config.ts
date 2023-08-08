import fs from 'fs';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const { devDependencies } = packageJson;
const external = [...Object.keys(devDependencies)];

export default defineConfig({
  plugins: [tsconfigPaths(), dts({ include: 'src' })],
  build: {
    minify: false,
    lib: {
      entry: 'src/index.ts',
      fileName: (format: string) => {
        return `${format}/index.js`;
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external,
    },
  },
});
