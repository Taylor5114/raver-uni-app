
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/ucharts/ucharts","pages/echarts/echarts","pages/unicloud/unicloud","pages/other/other","pages/tab/tab","pages/layout/layout","pages/format-e/format-e","pages/format-u/format-u","pages/canvas/canvas","pages/updata/updata"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"秋云高性能跨全端图表组件","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"秋云 ucharts echarts 高性能跨全端图表组件示例","compilerVersion":"3.1.9","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":"秋云高性能跨全端图表组件"}},{"path":"/pages/ucharts/ucharts","meta":{},"window":{"navigationBarTitleText":"全端uCharts渲染图表"}},{"path":"/pages/echarts/echarts","meta":{},"window":{"navigationBarTitleText":"H5、App用ECharts，其他端用uCharts"}},{"path":"/pages/unicloud/unicloud","meta":{},"window":{"navigationBarTitleText":"uniCloud数据渲染图表"}},{"path":"/pages/other/other","meta":{},"window":{"navigationBarTitleText":"图表交互示例"}},{"path":"/pages/tab/tab","meta":{},"window":{"navigationBarTitleText":"Tab选项卡切换示例"}},{"path":"/pages/layout/layout","meta":{},"window":{"navigationBarTitleText":"特殊布局示例"}},{"path":"/pages/format-e/format-e","meta":{},"window":{"navigationBarTitleText":"ECharts的formatter用法"}},{"path":"/pages/format-u/format-u","meta":{},"window":{"navigationBarTitleText":"uCharts的formatter用法"}},{"path":"/pages/canvas/canvas","meta":{},"window":{"navigationBarTitleText":"原生用法示例（非组件）"}},{"path":"/pages/updata/updata","meta":{},"window":{"navigationBarTitleText":"动态更新数据示例"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
