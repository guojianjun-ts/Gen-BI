# Gen-BI

## 前言

​	传统BI（Business Intelligence）主要依赖固定的工作流程：用户首先需要明确分析需求，接着手动配置数据模型、维度和指标，随后通过拖拽或SQL查询生成报表和可视化图表。虽然传统BI在结构化数据的静态分析中表现出色，但其劣势也日益显现，包括以下劣势。

- **高门槛**：需要专业的数据分析师或技术人员参与，普通用户难以快速上手。
- **灵活性不足**：面对动态需求或复杂数据时，分析和建模过程耗时长，难以快速响应。
- **智能化有限**：缺乏自动化洞察和预测能力，无法充分挖掘数据中的潜在价值。

## 项目文档



​	Gen-BI详细开发文档：[https://www.macrozheng.com](https://www.macrozheng.com/)

## 项目介绍

​	`	Gen-BI`（Generative-BI）项目是一套智能数据分析平台，旨在通过结合AI能力与可视化技术，帮助用户快速生成数据洞察和分析报告。该平台基于前后端分离架构，采用现代化的技术栈实现，支持用户通过简单的输入（分析诉求和原始数据）即可自动生成图表和分析结论，极大地提升了数据分析的效率和智能化水平。

### 项目演示

​	待实现

### 组织结构



```
Gen-BI
├── Gen-BI-common -- 工具类及通用代码
├── Gen-BI-mbg -- MyBatisGenerator生成的数据库操作代码
├── Gen-BI-security -- SpringSecurity封装公用模块
├── Gen-BI-admin -- 后台商城管理系统接口
├── Gen-BI-search -- 基于Elasticsearch的商品搜索系统
├── Gen-BI-portal -- 前台商城系统接口
└── Gen-BI-demo -- 框架搭建时的测试代码
```



### 技术选型

#### 后端技术



| 技术                | 说明                | 官网                                   |
| ------------------- | :------------------ | -------------------------------------- |
| Spring Boot         | Web应用开发框架     | https://spring.io/projects/spring-boot |
| MySQL               | 关系型数据库        | https://www.mysql.com/                 |
| MyBatis             | ORM框架             | https://mybatis.org/mybatis-3/         |
| MyBatis-Plus        | MyBatis增强工具     | https://baomidou.com/                  |
| Redis               | 内存数据存储        | https://redis.io/                      |
| Redisson            | 分布式锁和限流工具  | https://redisson.org/                  |
| RabbitMQ            | 消息队列            | https://www.rabbitmq.com/              |
| Deepseek / 智谱AI   | AI能力              |                                        |
| JDK1.8              | 线程池及异步化      | https://www.oracle.com/java/           |
| Easy Excel          | 表格数据处理库      | https://github.com/alibaba/easyexcel   |
| Hutool              | Java工具类库        | https://hutool.cn/                     |
| Apache Common Utils | Java工具类库        | https://commons.apache.org/            |
| Swagger             | API接口文档生成工具 | https://swagger.io/                    |
| Knife4j             | Swagger增强工具     | https://doc.xiaominfo.com/             |

#### 前端技术



| 技术                      | 说明             | 官网                        |
| ------------------------- | ---------------- | --------------------------- |
| React 18                  | 前端框架         | https://reactjs.org/        |
| Ant Design Pro 5.x 脚手架 | 企业级前端脚手架 | https://pro.ant.design/     |
| Umi 4 前端框架            | 前端框架         | https://umijs.org/          |
| Ant Design 组件库         | 组件库           | https://ant.design/         |
| Echarts 可视化库          | 可视化开发库     | https://echarts.apache.org/ |
| umi-OpenAPI               | 前端代码生成工具 | https://openapi.tools/      |

#### 项目架构图




