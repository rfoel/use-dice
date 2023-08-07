import { build } from 'esbuild'
import pkg from '../package.json' assert { type: 'json' }

const entryFile = './src/index.tsx'
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  logLevel: 'info',
  external: [...Object.keys(pkg.peerDependencies)],
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
