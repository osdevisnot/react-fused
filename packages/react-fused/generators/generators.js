const path = require('path');
const pkg = require('../package.json');
const exec = require('child_process').execSync;

const prompts = {
  name: {
    type: 'input',
    name: 'name',
    message: 'What is the name of your application ? ',
    validate: function(value) {
      if (/.+/.test(value)) {
        return true;
      }
      return 'name is required';
    }
  }
};

module.exports = function(plop) {
  plop.setActionType('install', function(answers, config, plop) {
    exec('yarn', { cwd: config.path, stdio: 'inherit' });
    return true;
  });
  plop.setGenerator('app', {
    description: 'react-fused application',
    prompts: [prompts.name],
    actions: function(data) {
      const generated = path.join(process.cwd(), data.name);
      const fromRoot = f => path.join(generated, f);
      const fromBase = f => path.join(__dirname, '..', '..', 'react-fused-examples', 'react-fused-app', f);
      const fromBaseToRoot = f => {
        return { type: 'add', path: fromRoot(f), templateFile: fromBase(f) };
      };
      const replaceDefaultApp = f => {
        return {
          type: 'modify',
          path: fromRoot(f),
          pattern: /react-fused-app/gi,
          template: '{{dashCase name}}'
        };
      };
      return [
        fromBaseToRoot('fuse.js'),
        fromBaseToRoot(path.join('src', 'index.tsx')),
        fromBaseToRoot('README.md'),
        replaceDefaultApp('README.md'),
        fromBaseToRoot('package.json'),
        replaceDefaultApp('package.json'),
        {
          type: 'modify',
          path: fromRoot('package.json'),
          pattern: /file:.*/gi,
          template: pkg.version + '"'
        },
        { type: 'install', path: fromRoot('/') }
      ];
    }
  });
  plop.setGenerator('lib', {
    description: 'react-fused library',
    prompts: [prompts.name],
    actions: [
      function(data) {
        console.log(data);
        return 'yay';
      }
    ]
  });
};
