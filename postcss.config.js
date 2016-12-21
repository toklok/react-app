module.exports = {
    plugins: [
        require('postcss-simple-vars')({silent: false}),
        require('autoprefixer')({
            browsers: [
                '> 1%',
                'last 2 versions',
                'firefox >= 4',
                'safari 7',
                'safari 8',
                'IE 8',
                'IE 9',
                'IE 10',
                'IE 11'
            ]
        })
    ]
};