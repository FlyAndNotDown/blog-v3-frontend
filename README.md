# ☕Kindem's Blog Version 3.0 Frontend

---

现在看到的这部分为前端代码仓库，要让博客完全运行，需要同时运行这个仓库和伴生的后端仓库: [FlyAndNotDown/blog-v3-bakcend](https://github.com/FlyAndNotDown/blog-v3-backend)

你可以直接访问这个地址来查看博客的运行效果: [Kindem 的博客](http://www.kindemh.cn)，同时，旧版本的博客将会被移动到如下地址: [Kindem 的旧博客](http://dev.kindemh.cn)，在不久之后，新的域名也将启用: [www.kindem.xyz](http://www.kindem.xyz)

如果你要基于我的博客系统搭建自己的博客，在后面会提及部署及私有化指北

# 📦技术栈
* `MVVM` 框架: `React`
* 界面库: `Ant Design`
* `Http`: `Axios`
* 构建: `Node.js`、`Babel`、`Webpack`

# 🏃‍运行
**需要配合后端仓库一起使用，仓库地址看上面**

建议切换到 `master` 分支来运行，这样比较稳定，`dev` 分支仍然处于维护以及更新中，如果还未安装 `Node.js`，请先自行安装。

安装 `yarn` 包管理：

```
npm i -g yarn
```

安装依赖：

```
yarn
```

启动 `dev` 服务器：

```
yarn start
```

访问 [http://localhost:20000/#/](http://localhost:20000/#/) 即可看到效果

如果需要使用 `release` 版本，请参考下面的私有化指北

# 🎁私有化指北
如果你需要基于这个仓库构建自己的博客，或者是部署以参考学习，这一章的内容或许能帮到你。

首先你要搞清楚项目的结构，如果你学习过 `React`，这部分可能你很熟悉，项目下的目录以及主要文件功能分别如下：

* `/src` 源文件目录
    * `/component` 组件目录
    * `/config` 配置目录
    * `/css` 样式目录
    * `/img` 静态图片目录
    * `/page` 页面目录
    * `/tool` 工具目录
    * `/index.js` 入口文件
    * `/router.js` 路由定义
* `/public` 公共文件目录
* `/build` 构建输出目录

如果你需要自己改动页面，可以参考注释一点点改，在 `dev` 服务器中，前端的所有修改都是实时更新的。

如果你需要部署到自己的服务器上，首先你需要在你的服务器上克隆一份代码，然后修改 `/src/config/main.js` 下的 `devMode` 选项为 `false`，接下来修改我使用 `TODO` 标注过的 `/config-overrides.js` 中的 `config.devtool` 为 `false`，这一选项将会关闭调试工具，构建结果的体积将会大大减小

接下来可以使用：

```
yarn build
```

来构建一份 `release` 版本，再在服务器上使用 `Nginx` 配置前端页面导向到 `/build/index.html` 即可完成前端的部署，后端的部署及 `Nginx` 配置参考另外一个仓库的私有化指北
