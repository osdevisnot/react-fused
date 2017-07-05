# react-fused
A CLI tool based on FuseBox for React Applications and Libraries.

## Quick Overview

### install `react-fused`
```
yarn global add react-fused
# OR
npm install -g react-fused
```

### scaffold application:
```
react-fused gen
# and answer few questions
```

### install dependencies
Navigate to generated folder
```
cd <generated-folder>
```
and install dependencies:
```
yarn
# OR
npm install
```

### run application
```
react-fused run
```
and navigate to [http://localhost:9000](http://localhost:9000) to see your application.


## Contributing to react-fused

`react-fused` is a monorepo setup based on [oao](https://github.com/guigrpa/oao) - a yarn based monorepo management tool. [oao](https://github.com/guigrpa/oao) provides number of monorepo enhancers and greatly facilitates autoring and code organisation for multi package repositories.

### Overview of packages

`packages/react-fused` - The main CLI tool is authored from `packages/react-fused`.
`packages/react-examples` - example applications based on `react-fused`. These examples are used for scaffolding new applications/components as well.
`packages/react-fused-ui` - collection of generic UI components.

### Development Setup
Clone this repository:
```
git clone https://github.com/osdevisnot/react-fused.git
```

Run setup script:
```
npm run setup
```

#### Global Dependencies
This repo uses [Yarn](https://yarnpkg.com/en/) package manager as preferred npm client due to its speed, security and reliability. Please ensure you have yarn available globally. If not already setup, yarn can be easily setup using:
```
npm install --global yarn
```
Alternatively, you can install yarn using your [preferred installation](https://yarnpkg.com/en/docs/install) method.