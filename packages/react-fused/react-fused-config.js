const path = require('path');
const { FuseBox, WebIndexPlugin, EnvPlugin, QuantumPlugin } = require('fuse-box');

const tsConfig = path.resolve(__dirname, 'config', 'tsconfig.json');

module.exports = function(env) {
  const { command, port } = process.env;
  const isProd = command === 'build';

  const fuse = FuseBox.init({
    homeDir: 'src',
    output: 'dist/$name.js',
    experimentalFeatures: true,
    plugins: [
      EnvPlugin({ 'process.env.NODE_ENV': isProd ? 'production' : 'development' }),
      WebIndexPlugin({
        template: path.resolve(__dirname, 'templates', 'index.html')
      })
      // isProd &&
      //   QuantumPlugin({
      //     treeshake: true,
      //     removeExportsInterop: false,
      //     uglify: true
      //   })
    ],
    hash: isProd,
    cache: !isProd,
    target: 'browser',
    log: true,
    debug: true,
    tsConfig
  });

  const vendor = fuse.bundle('vendor').instructions(` ~ index.tsx +tslib`);

  const app = fuse.bundle('app').instructions(` !> [index.tsx]`);

  if (command === 'run') {
    fuse.dev({ port });
    vendor.hmr().watch();
    app.hmr().watch();
  }

  return fuse;
};
