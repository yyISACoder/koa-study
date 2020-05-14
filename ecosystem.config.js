module.exports = {
  apps : [{
    name: 'API',
    script: './app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '106.53.46.97',
      ref  : 'origin/master',
      repo : 'git@github.com:yyISACoder/koa-study.git',
      path : '/var/www/koa-pm2',
      'post-deploy' : 'pm2 reload ecosystem.config.js'
    }
  }
};
