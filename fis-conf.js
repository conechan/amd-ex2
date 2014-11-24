
// 开起 autuload, 好处是，依赖自动加载。
fis.config.set('modules.postpackager', 'autoload');
fis.config.set('settings.postpackager.autoload.type', 'requirejs');

// 设置成 amd 模式。
fis.config.set('modules.postprocessor.html', 'amd');
fis.config.set('modules.postprocessor.js', 'amd');
fis.config.set('settings.postprocessor.amd', {
  baseUrl: '.',

  paths: {
    jquery: 'modules/libs/jquery/jquery.js'
  }
});

// 使用 depscombine 是因为，在配置 pack 的时候，命中的文件其依赖也会打包进来。
fis.config.set('modules.packager', 'depscombine');

fis.config.set('pack', {
  'pkg/jquery.js': ['modules/libs/jquery/jquery.js']
});

fis.config.set('roadmap.path', [

  {
    reg: /\/_[^\/]*?$/i,
    release: false
  },

  // 标记 isMod 为 true, 这样，在 modules 里面的满足 commonjs 规范的 js 会自动包装成 amd js, 以至于能在浏览器中运行。
  //
  {
    reg: /^\/modules\/(.*\.js)$/i,
    isMod: true,
    release: '/modules\/$1'
  }
]);
