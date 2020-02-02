const fs = require('fs-extra');
const path = require('path');

const srcpath = path.resolve(__dirname, '../../src');
const dstpath = path.resolve(__dirname, '../components/vue-patterns-ts');

const linkModule = () => {
  fs.ensureSymlinkSync(srcpath, dstpath);
};

module.exports = linkModule;
