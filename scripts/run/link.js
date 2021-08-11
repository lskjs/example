#!/usr/bin/env node
const { run, shell } = require('@lskjs/cli/utils');

const cwd = process.cwd();
const projectsDir = `${process.env.HOME}/projects`;

const packages = [`${cwd}/packages/app`];

const links = [
   //eslint-disable-line
  'db',
  'reactapp',
  'i18',
  'auth',
  'permit',
  'webserver',
  'server',
  'server-api',
  'grant',
  'uapp',
].map((name) => ({
  from: `${projectsDir}/lskjs/packages/${name}/build`,
  to: `node_modules/@lskjs/${name}`,
  packages,
}));

const main = async () => {
  // eslint-disable-next-line no-shadow
  links.forEach(({ from, packages, to }) => {
    packages.forEach((pack) => {
      shell(`lsk link ${from} ${pack}/${to}`);
    });
  });
};

run(main);