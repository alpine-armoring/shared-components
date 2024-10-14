import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from 'path';

export default {
  input: path.resolve(__dirname, 'src/index.ts'),
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ 
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ["**/*.test.ts", "**/*.test.tsx", "**/*.stories.tsx"]
      }
    }),
    postcss({
      extensions: ['.css', '.scss'],
      use: [
        ['sass', {
          includePaths: [
            path.resolve(__dirname, 'src/styles')
          ],
          data: `@import "global.scss";`
        }]
      ],
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
      },
      extract: false,
    }),
  ],
};
