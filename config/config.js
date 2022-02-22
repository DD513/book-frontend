const theme = require('../theme');

export default {
  history: 'hash',
  treeShaking: true,
  define: {
    'process.env.API_PROTOCOL': process.env.API_PROTOCOL,
    'process.env.API_HOST': process.env.API_HOST,
    'process.env.API_PORT': process.env.API_PORT,
    'process.env.API_PREFIX': process.env.API_PREFIX,
  },
  routes: [
    {
      path: '/start',
      component: '../layouts/BookLayout',
      routes: [
        { path: '/start', component: '../pages/findBook/index', exact: true },
        { path: '/start/create', component: '../pages/createBook/index', exact: true },
        { path: '/start/user', component: '../pages/user/index', exact: true },
        { path: '/start/edit/:id', component: '../pages/editBook/index', exact: true },

      ]
    },
    {
      path: '/',
      component: '../layouts/GlobalLayout',
      routes: [
        { path: '/', component: '../pages/index/index', exact: true }
      ],
    },

  ],
  hash: true,
  theme: theme,
  disableCSSModules: true,
  lessLoaderOptions: {
    modifyVars: theme,
    javascriptEnabled: true,
  },
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        title: 'umi-test',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
            /manifest\//,
          ],
        },
        pwa:{
          manifestOptions: {
            srcPath: 'src/manifest/manifest.webmanifest',
          },
          workboxPluginMode: 'InjectManifest',
          workboxOptions: {
            importWorkboxFrom: 'local',
            swSrc: 'src/service-worker.js',
            swDest: 'src/index.js',
          },
        },
      },
    ],
  ],
};
