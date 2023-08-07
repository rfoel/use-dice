import { build } from 'esbuild'

const entryFile = './src/index.tsx'
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  logLevel: 'info',
  external: ['react'],
  minify: true,
  sourcemap: true,
}

build({
  ...shared,
  format: 'esm',
  outfile: './dist/index.esm.js',
  target: ['esnext', 'node12.22.0'],
})

build({
  ...shared,
  format: 'cjs',
  outfile: './dist/index.cjs.js',
  target: ['esnext', 'node12.22.0'],
})
