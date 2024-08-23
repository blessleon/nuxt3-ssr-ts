module.exports = {
  apps : [{
    name:'nuxtapp',
    script: './.output/server/index.mjs',
    // watch: ['./.output/public'],
    env: {
      "PORT": 3000,
      "NODE_ENV": "development"
    },
    // env_production: {
    //   "PORT": 80,
    //   "NODE_ENV": "production",
    // }
  }],

  deploy : {
    production : {
      user : '',
      host : '',
      ref  : 'origin/main',
      repo : '',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
