import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import cleaner from 'rollup-plugin-cleaner';
import pkg from './package.json' with { type: "json" };
import del from 'rollup-plugin-delete';

const config = [
  {
    input: './src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins: [
      cleaner({
        targets: ['./dist']
      }),
      typescript()
    ],
    external: [
      'svelte/store'
    ]
  },
  {
    input: './dist/index.d.ts',
    output: {
      file: pkg.types,
      format: 'es'
    },
    plugins: [
      dts.default(),
      del({
        targets: [
          './dist/**/*.d.ts',
          '!./dist/index.d.ts',
          './dist/__tests__',
          './dist/storage',
          './dist/stores'
        ],
        hook: 'buildEnd'
      })
    ]
  }
];

export default config;
