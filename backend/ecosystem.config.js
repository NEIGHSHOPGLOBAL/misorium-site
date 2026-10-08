export default {
  apps: [
    {
      name: 'misorium-api',
      script: './src/server.js',
      instances: 2,
      exec_mode: 'cluster',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
