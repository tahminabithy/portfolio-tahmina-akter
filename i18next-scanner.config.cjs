const fs = require('fs');

module.exports = {
  input: ['src/**/*.{js,jsx}'], // Specify where to look for translatable strings
  output: './',
  options: {
    debug: false,
    removeUnusedKeys: true,
    sort: true,
    func: {
      list: ['t'],
      extensions: ['.js', '.jsx'],
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      extensions: ['.js', '.jsx'],
    },
    lngs: ['en', 'fr'],
    ns: ['translation'],
    defaultLng: 'en',
    defaultNs: 'translation',
    defaultValue: (lng, ns, key) => {
      if (lng === 'en') {
        return key;
      }
      return '';
    },
    resource: {
      loadPath: 'src/locales/{{lng}}/{{ns}}.json',
      savePath: 'src/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
  },
};
