module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json',
  ],
  env: {
    node: true,
    browser: true,
    es6: true,
    // The Follow config only works with eslint-plugin-vue v8.0.0+
    'vue/setup-compiler-macros': true,
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-console': 'off',
    'import/no-cycle': 'off',
    'import/extensions': 'off',
    'vue/multi-word-component-names': 'off',
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // 这里写覆盖vue文件的规则
      },
    },
  ],

  globals: {
    ElMessage: 'readonly',
    MessageBox: 'readonly',
  },
};
