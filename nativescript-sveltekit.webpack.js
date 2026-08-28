module.exports = (env) => {
  const webpack = require('@nativescript/webpack');
  webpack.init(env);

  webpack.chainWebpack((config) => {
    config.module
      .rule('svelte')
      .test(/\.svelte$/)
      .use('svelte-loader')
      .loader(require.resolve('svelte-loader'))
      .options({
        compilerOptions: {
          runes: true,
          dev: env.production !== true,
        },
      });

    config.resolve.extensions.merge(['.svelte']);
    config.resolve.alias.set('nativescript-sveltekit', __dirname + '/src');
  });

  return webpack.resolveConfig();
};
