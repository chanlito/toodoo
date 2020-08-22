import fiber from 'fibers';
import sass from 'sass';

const sassImports = ['~@/assets/styles/variables.scss'];

export const sassLoaderOptions = {
  prependData: sassImports.map(i => `@import '${i}'`).join('\n'),
  implementation: sass,
  sassOptions: { fiber, indentedSyntax: true },
};

export const scssLoaderOptions = {
  prependData: sassImports.map(i => `@import '${i}';`).join('\n'),
  implementation: sass,
  sassOptions: { fiber },
};
