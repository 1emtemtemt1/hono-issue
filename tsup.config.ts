import type { Options } from 'tsup'
import { defineConfig } from 'tsup'

const shared: Options = {
  format: ['esm'],
  outExtension() {
    return { js: '.js' }
  },
  platform: 'node' as const,
  target: 'node24' as const,
  bundle: true,
  sourcemap: false,
  splitting: false,
  // 将全部 npm 依赖与 workspace 包打进单文件，运行时无需 node_modules
  noExternal: [/.*/] as RegExp[],
  tsconfig: 'tsconfig.json',
// edgeone 自带了
//   banner: {
//     js: `import { createRequire as __createRequire } from 'node:module';
// const require = __createRequire(import.meta.url);`,
//   },
}

export default defineConfig([
  {
    ...shared,
    entry: {
      'cloud-functions/[[default]]': 'tsup/index.ts',
    },
    outDir: 'dist',
    clean: true,
  },
])
