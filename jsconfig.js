module.exports = {
    compilerOptions: {
        baseUrl: './',
        paths: {
            '@assets/*': ['./src/assets/*'],
            '@components/*': ['./src/components/*'],
            '@pages/*': ['./src/pages/*'],
            '@state/*': ['./src/state/*'],
            '@styles/*': ['./src/styles/*'],
            '@utils/*': ['./src/utils/*'],
            '@hooks/*': ['./src/hooks/*'],
            '@services/*': ['./src/services/*'],
        },
    },
    exclude: ['node_modules', 'dist'],
};
