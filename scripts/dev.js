import { exec } from 'child_process'

import { context } from 'esbuild'

const ctx = await context({
  bundle: true,
  entryPoints: ['./src/index.tsx'],
  logLevel: 'info',
  external: ['react'],
  minify: true,
  sourcemap: true,
  format: 'esm',
  outfile: './dist/index.esm.js',
  target: ['esnext', 'node12.22.0'],
})

exec('cd example && npm run dev')
ctx.watch()
