import { defineConfig } from 'vitepress'
import katex from 'markdown-it-katex'
import mermaid from 'markdown-it-mermaid-plugin'

export default defineConfig({
  title: 'Ai4Energy',
  description: 'Ai4Energy 文档 - 专业领域部分',
  base: '/ai4edocs-energy/',
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: 'Ai4Energy',
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Ai4E 文档', icon: 'book', link: '/docs/' },
      { text: '入门基础', link: 'https://huxinyang-web.github.io/ai4edocs-intro/' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: '建模工具',
          collapsed: false,
          items: [
            { text: '简介', link: '/docs/04Modeling/MTK_intro.md' },
            { text: 'What MTK do', link: '/docs/04Modeling/WathMTKdo.md' },
            { text: 'MTK 简介', link: '/docs/04Modeling/MTK_intro.md' },
            { text: 'MTK 参数辨识', link: '/docs/04Modeling/MTK_register.md' },
            { text: 'MTK 技巧', link: '/docs/04Modeling/MTK_tips.md' },
            { text: 'benchmark_de_mtk', link: '/docs/04Modeling/benchmark_de_mtk.md' }
          ]
        },
        {
          text: '仿真',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/05Simulation/1-微分代数方程.md' },
            { text: '微分代数方程', link: '/docs/05Simulation/1-微分代数方程.md' },
            { text: 'MTK 热传递仿真', link: '/docs/05Simulation/MTK_heattran.md' },
            { text: 'DE 热传递仿真', link: '/docs/05Simulation/DE_heattran.md' },
            { text: '稳态 RC 电路', link: '/docs/05Simulation/steadyRC.md' },
            { text: '组件模型', link: '/docs/05Simulation/componementModel.md' },
            { text: 'MTK 并行计算', link: '/docs/05Simulation/MTK_parallel_computing.md' },
            { text: 'MTK Sundials', link: '/docs/05Simulation/MTK_Sundials.md' }
          ]
        },
        {
          text: '优化',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/06Optimization/1-优化的概念.md' },
            { text: '优化的概念', link: '/docs/06Optimization/1-优化的概念.md' },
            { text: '优化问题的分类', link: '/docs/06Optimization/2-优化问题的分类.md' },
            { text: '能源系统工程中的优化问题', link: '/docs/06Optimization/3-能源系统工程中的优化问题.md' },
            { text: '优化问题的求解过程', link: '/docs/06Optimization/4-优化问题的求解过程.md' },
            { text: '优化问题的建模平台', link: '/docs/06Optimization/5-优化问题的建模平台.md' },
            { text: '传统决定性算法简介', link: '/docs/06Optimization/6-传统决定性算法简介.md' },
            { text: '启发式算法简介', link: '/docs/06Optimization/7-启发式算法简介.md' },
            { text: '黑箱优化问题', link: '/docs/06Optimization/8-黑箱优化问题.md' },
            { text: '优化问题建模之递归建模方法', link: '/docs/06Optimization/9-优化问题建模之递归建模方法.md' },
            { text: '优化应用之参数估计与软测量', link: '/docs/06Optimization/90-优化应用之参数估计与软测量.md' },
            { text: '优化应用之代理模型', link: '/docs/06Optimization/91-优化应用之代理模型.md' },
            { text: '一些可以看一看的优化相关工具', link: '/docs/06Optimization/92-一些可以看一看的优化相关工具.md' },
            { text: 'JuMP 混合整数线性优化实例', link: '/docs/06Optimization/93-JuMP 混合整数线性优化实例.md' },
            { text: 'JuMP 参数辨识', link: '/docs/06Optimization/94-JuMP 参数辨识.md' },
            { text: '微分方程参数辨识实例', link: '/docs/06Optimization/95-微分方程参数辨识实例.md' },
            { text: 'MTK 非线性参数辨识实例', link: '/docs/06Optimization/96-MTK 非线性参数辨识实例.md' },
            { text: 'MTK 符号系统参数辨识实例', link: '/docs/06Optimization/97-MTK 符号系统参数辨识实例.md' },
            { text: 'MTK 部分参数辨识实例', link: '/docs/06Optimization/98-MTK 部分参数辨识实例.md' },
            { text: 'Optimization.jl', link: '/docs/06Optimization/Optimization.jl.md' },
            { text: 'GenSBO', link: '/docs/06Optimization/GenSBO.md' },
            { text: 'MIDACO', link: '/docs/06Optimization/MIDACO.md' }
          ]
        },
        {
          text: '控制',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/07Control/1-控制的本质.md' },
            { text: '控制的本质', link: '/docs/07Control/1-控制的本质.md' },
            { text: 'Kalman Filtering', link: '/docs/07Control/KalmanFiltering.md' },
            { text: 'Optim Control', link: '/docs/07Control/OptimControl.md' },
            { text: 'JuMP MPC', link: '/docs/07Control/JuMPMPC.md' },
            { text: 'MTK MPC', link: '/docs/07Control/MTKMPC.md' }
          ]
        },
        {
          text: 'AI 和 ML',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/08AIandML/1-机器学习和人工智能.md' },
            { text: '机器学习和人工智能', link: '/docs/08AIandML/1-机器学习和人工智能.md' }
          ]
        },
        {
          text: '能源管理系统',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/09EMS/1-能源管理信息系统.md' },
            { text: '能源管理信息系统', link: '/docs/09EMS/1-能源管理信息系统.md' }
          ]
        },
        {
          text: '物联网大数据云计算',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/11IotBigdataCloud/1-物联网.md' },
            { text: '物联网', link: '/docs/11IotBigdataCloud/1-物联网.md' },
            { text: '消息件', link: '/docs/11IotBigdataCloud/2-消息件.md' },
            { text: '大数据简介', link: '/docs/11IotBigdataCloud/3-大数据简介.md' },
            { text: '从虚拟机到云计算', link: '/docs/11IotBigdataCloud/4-从虚拟机到云计算.md' },
            { text: '容器化和 k8s', link: '/docs/11IotBigdataCloud/5-容器化和 k8s.md' }
          ]
        },
        {
          text: '可再生能源工具',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/awesome-carbon-neutrality/RenewableEnergy/index.md' },
            { text: 'SAM', link: '/docs/awesome-carbon-neutrality/RenewableEnergy/1-SAM.md' },
            { text: 'ReOpt', link: '/docs/awesome-carbon-neutrality/RenewableEnergy/2-ReOpt.md' },
            { text: 'pvlib-python', link: '/docs/awesome-carbon-neutrality/RenewableEnergy/3-pvlib-python.md' },
            { text: 'SolarPILOT', link: '/docs/awesome-carbon-neutrality/RenewableEnergy/4-SolarPILOT.md' },
            { text: 'SolarTherm', link: '/docs/awesome-carbon-neutrality/RenewableEnergy/5-SolarTherm.md' },
            { text: 'SolTrace', link: '/docs/awesome-carbon-neutrality/RenewableEnergy/6-SolTrace.md' },
            { text: 'OpenFAST', link: '/docs/awesome-carbon-neutrality/RenewableEnergy/7-OpenFAST.md' },
            { text: 'OpenLCA', link: '/docs/awesome-carbon-neutrality/RenewableEnergy/8-OpenLCA.md' },
            { text: 'FOQUS', link: '/docs/awesome-carbon-neutrality/RenewableEnergy/9-FOQUS.md' },
            { text: 'PLANHEAT Tool', link: '/docs/awesome-carbon-neutrality/RenewableEnergy/10-PLANHEAT Tool.md' },
            { text: 'Modelica Buildings library', link: '/docs/awesome-carbon-neutrality/RenewableEnergy/11-Modelica Buildings library.md' },
            { text: 'IDEAS', link: '/docs/awesome-carbon-neutrality/RenewableEnergy/12-IDEAS.md' },
            { text: 'OpenMDAO', link: '/docs/awesome-carbon-neutrality/RenewableEnergy/13-OpenMDAO.md' },
            { text: 'coolprop-intro', link: '/docs/awesome-carbon-neutrality/RenewableEnergy/coolprop-intro.md' },
            { text: 'sam-ssc', link: '/docs/awesome-carbon-neutrality/RenewableEnergy/sam-ssc.md' }
          ]
        }
      ]
    },

    footer: {
      message: '陕 ICP 备 19000424 号 -2 | 陕公网安备 61010302001034 号',
      copyright: 'Copyright © 2024 Ai4Energy'
    },

    editLink: {
      pattern: 'https://github.com/huxinyang-web/ai4edocs-energy/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    returnToTopLabel: '返回顶部',

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      level: 2
    }
  },

  markdown: {
    config: (md) => {
      md.use(katex)
      md.use(mermaid)
    }
  },

  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }]
  ]
})
