const path = require('path');
const { FuseBox, WebIndexPlugin } = require('fuse-box');

module.exports = function(env) {
  const { command, port } = process.env;
  const isDev = command === 'run';

  const fuse = FuseBox.init({
    homeDir: 'src',
    output: 'dist/$name.js',
    plugins: [
      WebIndexPlugin({
        template: path.resolve(__dirname, 'templates', 'index.html')
      })
    ],
    log: true,
    debug: true
  });

  const vendor = fuse.bundle('vendor').instructions(' ~ index.tsx');

  const app = fuse.bundle('app').instructions(' !> [index.tsx]');

  if (command === 'run') {
    fuse.dev({ port });
    vendor.hmr().watch();
    app.hmr().watch();
  }

  return fuse;
};
