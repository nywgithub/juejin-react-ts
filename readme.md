# react 掘金
> react 脚手架

### 技术栈
+ react
+ react-router
+ react-redux
+ axios
+ koa2

### 命令
```bash
npm run i        //安装依赖
npm run dev      //开发模式(前后端分离)
npm run local    //开发模式(前后端不分离)
npm run mock     //开发模式(mock接口平台)  //开发中
npm run build    //打包发布
```

### 打开热更新
disableHostCheck: true 

### 项目结构
```text
.
└── config                //webpack打包配置
└── src
    ├── entry             //打包文件主入口
    └── common            //全局公用代码、组件
    ├── router            //scss文件夹
        ├── index.jsx     //主入口
        ├── MainRoute.jsx //具体路由配置
        ├── RoutePlus     //route的高阶路由，用来监听路由变化
        └── ...
    └── css               //scss文件夹
    └── imgs              //图片资源文件夹
    └── fetch             //ajax请求集成，
        ├── axios.jsx     //平台中所有的api请求,统一走axios,可以全局管理请求状态
        └── user.jsx      //书写方式请参考这个demo
    └── views             //所有可视化模块都在这里
        └── ...
    └── containers        //可视化模块如果需要使用redux，封装在这里
        └── ...
    └── actions           //redux状态管理使用
        └── ...
    └── reducers          //redux状态管理使用
        └── ...
└── html
    └── template           //开发模式下HTML模块

```

### 目标
+ 掘金社区UI加功能 复刻

### 使用说明
+ 支持单页面、多页面应用混合开发
+ 支持 `jsx\tsx`
+ 支持 `sass\less` 预编译
+ 集成 `react-router-dom`使用演示
+ 集成 `react-redux` 使用演示
+ 集成 `axios` 使用演示
+ 集成 `rc-form` 使用演示

