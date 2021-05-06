module.exports = {
  apps: [
    {
      name: "sshclone",
      script: "./bin/www",
      env: {
        COMMON_VARIABLE: "true",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
  deploy: {
    production: {
      user: "root",
      host: "47.115.35.65",
      ref: "origin/master",
      repo: "git@github.com:scarecrow-x/sshclone.git",
      path: "/var/www/development",
      "post-deploy":
        "git pull origin master && npm install && pm2 startOrRestart ecosystem.config.js --env dev",
      env: {
        NODE_ENV: "production",
      },
    },
  },
};
