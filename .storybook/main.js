const path = require('path')

const tsconfig = path.resolve(__dirname, '../tsconfig.json')

module.exports = {
    stories: ["../src/stories/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
    addons: [
        "@storybook/preset-create-react-app",
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
            },
        },
        "@storybook/addon-controls",
        "@storybook/addon-actions",
    ],
    typescript: {
        check: true,
        checkOptions: { tsconfig },
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            tsconfigPath: tsconfig,
        },
    },
};
