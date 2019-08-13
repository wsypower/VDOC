# Markdown 扩展示例

## 自定义容器

```js
::: tip 提醒
这里是 tip 容器
:::

::: warning 警告
这里是警告容器
:::

::: danger 危险
这里是危险容器
:::
```

::: tip 提醒
这里是 tip 容器
:::

::: warning 警告
这里是警告容器
:::

::: danger 危险
这里是危险容器
:::

## 链接

### 锚点链接

在 VuePress 中所有.md 文件中的标题(默认 h2 和 h3)都会自动添加锚点链接(anchor)，所以如果我们需要跳转至固定的锚点，可以如下进行设置

```js
[锚点链接](/example/#自定义容器)
```

[锚点链接](/example/#自定义容器)

### 内部链接

> 在 VuePress 内部，以.md 或者.html 结尾的文件，会被转换成<doc-color color="Danger">router-link</doc-color> 用于 SPA 导航，它是大小写敏感的。
> 如果文件名为 README.md，它会被编译成 index.html，所以当我们访问/vuepress/时，其实就是在访问/vuepress/README.md 或者/vuepress/index.html
