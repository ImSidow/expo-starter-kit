module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    alias: {
                        "@assets": "./src/assets",
                        "@components": "./src/components",
                        "@hooks": "./src/hooks",
                        "@helpers": "./src/helpers",
                        "@layouts": "./src/layouts",
                        "@navigation": "./src/navigation",
                        "@screens": "./src/screens",
                        "@store": "./src/store",
                    },
                },
            ],
        ],
    };
};
