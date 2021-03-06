export default {
  dev: {
    '/api.farm/': {
      target: 'https://api.fmg.net.cn/',
      changeOrigin: true,
      pathRewrite: {
        '^/api.farm': '',
      },
    },
    '/api.request': {
      target: 'https://order.kuaidi100.com/',
      pathRewrite: { '^/api.request': '' },
      changeOrigin: true,
    },
    '/api.poll': {
      target: 'https://poll.kuaidi100.com/',
      pathRewrite: { '^/api.poll': '' },
      changeOrigin: true,
    },
    '/api.loginCheck': {
      target: 'http://1.15.182.218:8080/',
      pathRewrite: { '^/api.loginCheck': '' },
      changeOrigin: true,
    },
  },
  test: {
    '/api/': {
      target: 'http://localhost:8001',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  pre: {
    '/api.farm/': {
      target: 'https://api.fmg.net.cn/',
      changeOrigin: true,
      pathRewrite: {
        '^/api.farm': '',
      },
    },
    '/api.request': {
      target: 'https://order.kuaidi100.com/',
      pathRewrite: { '^/api.request': '' },
      changeOrigin: true,
    },
    '/api.poll': {
      target: 'https://poll.kuaidi100.com/',
      pathRewrite: { '^/api.poll': '' },
      changeOrigin: true,
    },
   
  },
};
