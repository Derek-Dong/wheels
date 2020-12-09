module.exports = function(config) {
  config.set({
    // 基本路径，用于files和exclude上
    basePath: '',
    //可用的框架和库
    frameworks: ['mocha', 'sinon-chai'],
    client: {
      chai: {
        includeStack: true
      }
    },

    //需要加载到浏览器测试的文件
    files: ['dist/**/*.test.js', 'dist/**/*.test.css'],

    //排除文件
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    //启用或禁用自动检测文件变化进行测试
    autoWatch: true,

    //指定浏览器
    browsers: ['ChromeHeadless'],

   // 开启或禁用持续集成模式
    // 设置为true, Karma将打开浏览器，执行测试并最后退出
    singleRun: false,

    //并打级别（打开浏览器数量）
    concurrency: Infinity
  });
};
