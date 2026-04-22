# flun-webauthn-browser <!-- omit in toc -->
![WebAuthn](https://img.shields.io/badge/WebAuthn-Browser_Simplified-blueviolet?style=for-the-badge&logo=WebAuthn)
[![npm (scoped)](https://img.shields.io/npm/v/flun-webauthn-browser?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/flun-webauthn-browser)

### 本包以 ESM 模块系统编写->未来趋势;如果你用于node项目,只要你的 Node.js 版本大于22.12,可保留CJS `require()` 语法调用,否则请使用 `import` 语法;(浏览器链接或下载本地导入无影响)
## 安装
### Node LTS 20.x 及以上

```sh
npm i flun-webauthn-browser
```

### UMD

本包也可通过 **unpkg** 安装，只需在页面的 `<head>` 元素中引入以下脚本;库的方法将挂载在全局对象 **`flunWebAuthnBrowser`** 上。

> 注意：以下两个包的唯一区别在于 ES5 版本包含针对旧版浏览器的 polyfill;这会增加一定的包体积，但**能够**在旧版浏览器中使用 `browserSupportsWebAuthn()` 来检测 WebAuthn 是否可用，从而展示合适的 UI。

#### ES2021

如果只需支持现代浏览器，请使用 `ES2021` 版本：

```html
<script src="https://unpkg.com/flun-webauthn-browser/dist/index.js"></script>
```

#### ES5

如果需要在已废弃的浏览器（如 IE11 和 Edge 旧版）中支持 WebAuthn 特性检测，请使用 `ES5` 版本：

```html
<script src="https://unpkg.com/flun-webauthn-browser/dist/index.es5.js"></script>
```