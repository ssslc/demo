import { defineConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import { wrapperEnv } from './build/utils';
import { loadEnv } from 'vite';


function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir);
}

// defineConfig 工具函数，这样不用 jsdoc 注解也可以获取类型提示
// export default defineConfig(({command, mode}) => { 
//   const root = process.cwd()
//   const env = loadEnv(mode, root);
//   constenv = loadEnv(mode, root)
//   const viteEnv = wrapperEnv(env)
//   const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv
//   const isBuild = command === 'build';
//   return {
//     plugins: [vue()],
//     base: VITE_PUBLIC_PATH,
//     root,
//     resolve: {
//       alias: [
//         {
//           find: /@\//,
//           replacement: pathResolve('src') + '/',
//         }
//       ]
//     }
//   }})


// function pathResolve(dir) {
//   return resolve(process.cwd(), '.', dir);
// }

export default ({ command, mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root);
  constenv = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv
  const isBuild = command === 'build';
  return {
    base: VITE_PUBLIC_PATH,
    plugins: [vue()],
    root,
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
        }
      ]
    }
  }
}
