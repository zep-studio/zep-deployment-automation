module.exports = {
  bracketSpacing: true,
  bracketSameLine: false,
  singleQuote: true,
  trailingComma: 'all',
  semi: true,

  // @ianvs/prettier-plugin-sort-imports
  importOrder: ['<THIRD_PARTY_MODULES>', '@/(.*)$', '^[./](.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require('@ianvs/prettier-plugin-sort-imports')],
};
