module.exports = {
  mongodb: {
    server: process.env.MONGODB_PORT_27017_TCP_ADDR,
    port: 27017,
    autoReconnect: true,
    poolSize: 4,
    admin: true,

    auth: [
    ],

    adminUsername: '',
    adminPassword: '',
    whitelist: [],
    blacklist: []
  },

  site: {
    port: 8081,
    cookieSecret: 'cookiesecret',
    sessionSecret: 'sessionsecret',
    cookieKeyName: 'mongo-express'
  },
  useBasicAuth: true,
  basicAuth: {
    username: 'admin',
    password: 'pass'
  },

  options: {
    documentsPerPage: 10,
    editorTheme: "rubyblue",
    cmdType: 'eval',
    subprocessTimeout: 300
  }
};
