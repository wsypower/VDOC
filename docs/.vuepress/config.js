/*
 * @file 基础配置
 * @Author: wei.yafei
 * @see { @link https://vuepress.vuejs.org/zh/config }
 * @Date: 2019-08-13 18:50:23
 * @Last Modified by: wei.yafei 
 * @Last Modified time: 2019-08-13 23:10:04
 */
module.exports = {
  /*=============================================
    =                     base                  =
   =============================================*/
  /**
   * @description:网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
   * @param {String}
   * @default ['/']
   * @example
   * base: "/bar/",
   * @example
   * base: "/",
   * @see  {@link //vuepress.vuejs.org/zh/config/#base}
   */
  base: "/",
  /*=============================================
    =                    title                  =
   =============================================*/
  /**
   * @description:网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
   * @param {String}
   * @default [undefined]
   * @example
   * title: "天翼城管文档",
   */
  title: "天翼城管文档",
  /*=============================================
     =                   网站描述                  =
     =============================================*/
  /**
   * @description:网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
   * @param {String}
   * @default []
   * @example
   * description: "随便写写",
   */
  description: "略略略略略略",
  /*=============================================
    =                      head                 =
   =============================================*/
  /**
   * @description:网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
   * @param {Array}
   * @default []
   * @example
   * head: [["link", { rel: "icon", href: "/logo.png" }]],
   */
  head: [["link", { rel: "icon", href: "/doc.png" }]],
  /*=============================================
   =                      host                  =
   =============================================*/
  /**
   * @description:指定用于 dev server 的主机名。
   * @param {String}
   * @default ['0.0.0.0']
   * @example 配置成功后我们可以127.0.0.1:3000来访问我们的项目
   * port: 3000,        //此参数可以指明我们的端口号
   * host: "127.0.0.1", //此参数可以指明我们主机名(IP地址)
   */
  //   port: 3000,
  //   host: "127.0.0.1",
  /*=============================================
    =                     dest                  =
   =============================================*/
  /**
   * @description:指定 vuepress build 的输出目录。
   * @param {String}
   * @default [.vuepress/dist]
   */
  dest: "dist",

  /*=============================================
  =                  themeConfig                =
  =============================================*/
  /**
   * @description:为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。
   * 默认的主题提供了一个首页（Homepage）的布局 @see {@link '../README.md'}
   * @param {Object}
   * @default [{}]
   * @see {@link https://wangtunan.github.io/blog/vuepress/#首页}
   */
  themeConfig: {
    /*=============================================
    =                    内置搜索                  =
    =============================================*/
    /**
     * @description：内置搜索
     * @param {boolean} search: 通过配置此属性为false，来禁用内置搜索
     * @param {Num} searchMaxSuggestions: 通过配置此属性为一个数字，对内置的搜索进行最多结果数量的限制
     * @example  search: false,
     * @example  searchMaxSuggestions: 10
     */
    search: true,
    /*=============================================
    =                   最后更新时间                =
    =============================================*/
    /**
     * @description：最后更新时间默认不开启，它是基于git提交的时间戳，所以我们的静
     态站点是需要通过git init的仓库进行管理的，并且它是按git commit的时间来计算的。
     * @param {String | Boolean} lastUpdated
     * @default [false]
     * @example lastUpdated: '最后更新时间',  //接受字符串，它设置了最后更新时间的label，例如：最后更新时间：2019年5月3日 21:51:53
     * @example lastUpdated: true,   //设置true，开启最后更新时间
     * @example lastUpdated: false   //设置false，不开启最后更新时间(默认)
     */
    lastUpdated: "最后更新时间",
    /*=============================================
    =                Git 仓库和编辑链接              =
    =============================================*/
    repo: "https://github.com/wsypower/VDOC",
    repoLabel: "查看源码",
    sidebarDepth: 3,
    displayAllHeaders: true, // 默认值：false
    /*=============================================
    =       一个基本的导航栏链接可以配置成如下所示      =
    =============================================*/
    /**
     * @description：导航栏可能包含你的页面标题、搜索框、 导航栏链接、多语言切换、仓库链接，它们均取决于你的配置。
     * @param {Array | Boolean}.
     * @example 
     * nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://google.com' },
      ]
     * @example 禁用导航栏
     * navbar: false
     */
    nav: [
      {
        text: "式例",
        items: [
          { text: "内容1", link: "/example/" },
          { text: "内容2", link: "/CSS/" },
          { text: "内容3", link: "/JavaScript/" }
        ]
      },
      { text: "首页1", link: "/Vue/" },
      //下拉列表分组适用于下拉选项较多的情况
      {
        text: "首页2",
        items: [
          {
            text: "标题1",
            items: [
              { text: "内容1", link: "/xxxxx" },
              { text: "内容2", link: "/xxxx" },
              { text: "内容3", link: "/xxxxxxx" }
            ]
          },
          {
            text: "标题2",
            items: [
              { text: "内容1", link: "/xxxxxx" },
              { text: "内容2", link: "/xxxxx" },
              { text: "内容3", link: "/xxxxxxxxx" }
            ]
          }
        ]
      }
    ],
    /*=============================================
    =                   侧边栏分组                  =
    =============================================*/
    /**
     * @description：侧边栏分组可以如下进行配置，其中collapsable属性设置为false，意味着展开这个分组，属性设置为true，意味着折叠这个分组。
     * @param {Array | Boolean}.
     * @example 自动生成侧边栏
     * sidebar: 'auto',
     */
    sidebar: [
      {
        title: "式例",
        collapsable: false, //控制伸缩
        children: ["/example/", "/CSS/", "/JavaScript/"]
      },
      {
        title: "Vue.js",
        collapsable: true,
        children: ["/Vue/"]
      }
    ]
  }
};
