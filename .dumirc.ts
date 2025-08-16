import { defineConfig } from 'dumi';
import style from './docs/siteIndexStyle';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/du-hooks/',
  publicPath: '/du-hooks/',
  themeConfig: {
    name: 'du-hooks',
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    footer: false,
    resolve: {
      includes: ['docs', 'src'],
    },
    nav: [
      {
        title: '指南',
        link: '/guide',
      },
      {
        title: 'Hooks',
        link: '/hooks/use-unmount',
      },
      {
        title: 'GitHub',
        link: 'https://github.com/dugc123/du-hooks',
      },
    ],
    sidebar: {
      '/hooks': [
        {
          title: '生命周期',
          children: [
            { title: 'useUnmount', link: '/hooks/use-unmount' },
            { title: 'useMount', link: '/hooks/use-mount' },
          ],
        },
        {
          title: '状态',
          children: [
            { title: 'useBoolean', link: '/hooks/use-boolean' },
            { title: 'useToggle', link: '/hooks/use-toggle' },
          ],
        },
      ],
    },
  },
  styles: [style],
});