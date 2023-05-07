# nuxt3-ssr-ts
nuxt3, ssr mode, ts, mockjs, sentry, pm2

## 
```nuxt3-ssr-ts
nuxt3-ssr-ts                
├─ api               // 接口      
├─ assets            // 资源文件（打包会混淆）             
├─ components        // 组件             
├─ layout            // 模板             
├─ middleware        // 中间件             
├─ pages             // 页面                    
├─ plugins           // 插件                        
├─ public            // 静态资源 （打包不会混淆）                        
├─ server                   
│  └─ api            // 提供api接口     
├─ types                        
├─ app.vue           // entry file               
├─ nginx.conf               
├─ nuxt.config.ts    // config file          
├─ package-lock.json        
├─ package.json             
├─ README.md                
└─ tsconfig.json            

```
---

## 1, Nuxt 动态路由
1. 使用[dynamic]来动态处理路由和路径，以达到路由权限和复用的目的
2. 优先级 `http://localhost:3001/user/1001`  比 `http://localhost:3001/goods1/detail` 要高，不会在匹配`[auth]`为user, `detail`为 `userId`的情况

## 2, SSR模式部署

1. `nuxt.config.ts` 设置 `ssr : true` 或者不设置，默认是 `ssr : true` 的模式
2. `npm run build` 打包服务端渲染模式的的包体, 默认在`.output`目录下
3. 在部署的的服务器上安装` nodejs`,安装完成后安装  `pm2` 等环境，`npm i pm2 --global`
4. `pm2 ecosystem` 生成`ecosystem.config.js` 配置文件，将打包产物路径填入`ecosystem.config.js`
5. 命令 `pm2 start ecosystem.config.js` 即可启动服务和网站，访问`localhost:3000`
