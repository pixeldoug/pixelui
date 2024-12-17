import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss({
      extract: true,
      minimize: true,
      sourceMap: true
    })
  ]
};