const userConfig = {
    sequelize: {
      dialect: "mysql",
  
      // 这里也可以通过 .env 文件注入环境变量，然后通过 process.env 获取
      host: "xxx",
      port: "xxx",
      database: "xxx",
      username: "xxx",
      password: "xxx"
    }
}