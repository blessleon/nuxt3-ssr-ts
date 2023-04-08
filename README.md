# nuxt3-ssr-ts
nuxt3, ssr mode, ts, mockjs, sentry, pm2

## 
```nuxt3-ssr-ts
nuxt3-ssr-ts                
├─ api                      
├─ assets                   
│  └─ scss                  
│     ├─ base.scss          
│     └─ element-plus.scss  
├─ components               
├─ layout                   
├─ middleware               
├─ pages                    
│  ├─ sentry                
│  │  └─ index.vue          
│  ├─ table                 
│  │  └─ index.vue          
│  ├─ index.vue             
│  └─ welcome.vue           
├─ plugins                  
│  ├─ element-plus.ts       
│  └─ sentry.ts             
├─ public                   
│  └─ img                   
├─ server                   
│  └─ api                   
│     ├─ card.ts // mockjs api            
│     └─ list.ts            
├─ types                    
│  └─ index.type.ts        
├─ app.vue  // entry file               
├─ nginx.conf               
├─ nuxt.config.ts // config file          
├─ package-lock.json        
├─ package.json             
├─ README.md                
└─ tsconfig.json            

```
---

## SSR模式部署

1. `nuxt.config.ts` 设置 `ssr : true` 或者不设置，默认是 `ssr : true` 的模式
2. `npm run build` 打包服务端渲染模式的的包体, 默认在`.output`目录下
3. 在部署的的服务器上安装` nodejs`,安装完成后安装  `pm2` 等环境，`npm i pm2 --global`
4. `pm2 ecosystem` 生成`ecosystem.config.js` 配置文件，将打包产物路径填入`ecosystem.config.js`
5. 命令 `pm2 start ecosystem.config.js` 即可启动服务和网站，访问`localhost:3000`
