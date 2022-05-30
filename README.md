# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

# tsconfig
# types 默认所有打包可见,全引入  types 被设置为 [] ,这样是全部不导入
# 指定 不要将以下特定文件全导入type类型
-"types": [ 
    "vite/client" 
  ],