const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const merge = require('lodash/merge');
const replaceall = require('replaceall');

const vuePatternsTsMainPath = path.resolve(__dirname, '../../src/main');

const autoGeneratedPath = path.resolve(
  __dirname,
  '../components/auto-generated'
);

const examplesFullPaths = glob.sync(
  path.resolve(vuePatternsTsMainPath, `./**/*.vue`)
);

let allImportPaths = [];

const tree = examplesFullPaths.map(fullPath => {
  const category = fullPath
    .replace(`${vuePatternsTsMainPath}/`, '')
    .split('/')[0];

  const utilName = fullPath
    .replace(`${vuePatternsTsMainPath}/${category}/`, '')
    .split('/')[0];

  const exampleName = path.basename(fullPath, '.vue');
  allImportPaths.push(
    `import ${category}${utilName}${exampleName} from 'vue-patterns-ts/main/${category}/${utilName}/examples/${exampleName}.vue';`
  );

  return {
    [category]: {
      [utilName]: {
        [exampleName]: {
          sourceCode: fs.readFileSync(fullPath, {
            encoding: 'utf8'
          }),
          component: `__replace__${category}${utilName}${exampleName}__replace__`
        }
      }
    }
  };
});

const meta = tree.reduce((prev, current) => merge(prev, current), {});

const allCategoryNames = Object.keys(meta);

const metaWithoutCategory = {};

Object.keys(meta).forEach(category => {
  Object.keys(meta[category]).forEach(utilName => {
    metaWithoutCategory[utilName] = meta[category][utilName];
  });
});

const allUtilNames = Object.keys(metaWithoutCategory);
const allUtilNameOptionImportPaths = allUtilNames
  .map(utilName => `import { ${utilName}Options } from 'vue-patterns-ts';`)
  .join('\n');
const exportAllUtilNameOptions = `{ ${allUtilNames
  .map(utilName => `${utilName}Options`)
  .join(', ')} }`;

let stringifiedMeta = JSON.stringify(meta);
stringifiedMeta = replaceall('"__replace__', '', stringifiedMeta);
stringifiedMeta = replaceall('__replace__"', '', stringifiedMeta);

const finalData = `
${allImportPaths.join('\n')}
${allUtilNameOptionImportPaths}

const meta = ${stringifiedMeta};
const allUtilNames = ${JSON.stringify(allUtilNames)};
const allCategoryNames = ${JSON.stringify(allCategoryNames)};
const exportAllUtilNameOptions = ${exportAllUtilNameOptions};

const metaWithoutCategory = {};

Object.keys(meta).forEach(category => {
  // @ts-ignore
  Object.keys(meta[category]).forEach(utilName => {
    // @ts-ignore
    metaWithoutCategory[utilName] = meta[category][utilName];
  });
});

export { meta, allCategoryNames, allUtilNames, metaWithoutCategory, exportAllUtilNameOptions }
`;

fs.outputFileSync(path.resolve(autoGeneratedPath, './meta.ts'), finalData, {
  encoding: 'utf8'
});
