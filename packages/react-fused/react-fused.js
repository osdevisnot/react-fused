#!/usr/bin/env node
const path = require('path');
const exec = require('child_process').execSync;

const run = (argv, command = 'node fuse.js') =>
  exec(command, {
    stdio: [0, 1, 2],
    env: Object.assign({}, process.env, argv, {
      command: argv._[0]
    })
  });

require('yargs')
  .command(
    'run',
    'run react fused application',
    {
      port: { default: 9000, describe: 'use this port for server' },
      ui: { default: false, describe: 'start ui development environment' }
    },
    argv => run(argv)
  )
  .command(
    'build',
    'build react fused application',
    {
      prod: { default: false, describe: 'use prod mode for build' },
      ui: { default: false, describe: 'start ui development environment' }
    },
    argv => run(argv)
  )
  .command(
    'test',
    'test react fused application',
    {
      coverage: { default: false, describe: 'run tests once & generate coverage reports' }
    },
    argv => {
      console.log('running test command');
    }
  )
  .help().argv;
