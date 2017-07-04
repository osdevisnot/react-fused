#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const exec = require('child_process').exec;

const cliPackagePath = path.join(__dirname, '..', 'packages', 'react-fused', 'package.json');

const cliPackage = require(cliPackagePath);

const cliPackageBackup = Object.assign({}, cliPackage, { dependencies: {} });

fs.writeFileSync(cliPackagePath, JSON.stringify(cliPackageBackup, null, 2), 'utf8');

exec('npm link', { cwd: path.resolve('packages', 'react-fused') }, (error, stdout, stderr) => {
  if (error) {
    console.error(error.stack || error);
  }
  fs.writeFileSync(cliPackagePath, JSON.stringify(cliPackage, null, 2), 'utf8');
});
