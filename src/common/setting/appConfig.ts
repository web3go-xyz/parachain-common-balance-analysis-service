export class AppConfig {

  static initilize(env: NodeJS.ProcessEnv) {

    // DB_HOST: '',
    // DB_PASSWD: '',
    // DB_NAME: 'prod-litmus-balance',
    // DB_USER: 'postgres',
    // DB_PORT: '5432'
    if (env.DB_HOST) {
      AppConfig.postgresConnection.host = env.DB_HOST;
    }
    if (env.DB_PORT) {
      AppConfig.postgresConnection.port = Number(env.DB_PORT);
    }
    if (env.DB_USER) {
      AppConfig.postgresConnection.username = env.DB_USER;
    }
    if (env.DB_PASSWD) {
      AppConfig.postgresConnection.password = env.DB_PASSWD;
    }

    AppConfig.typeOrmOption4ParachainBalanceDB = {
      ...this.postgresConnection,
      database: 'prod-xxx-balance',
    };
    if (env.DB_NAME) {
      AppConfig.typeOrmOption4ParachainBalanceDB.database = env.DB_NAME;
    }

    if (env.PARACHAIN_NAME) {
      AppConfig.ParachainName = env.PARACHAIN_NAME;
    }
    if (env.PARACHAIN_ENDPOINT) {
      AppConfig.ParachainEndpoint = env.PARACHAIN_ENDPOINT;
    }


    console.log(AppConfig);
  }

  public static postgresConnection = {
    type: 'postgres',
    host: '',
    port: 5432,
    username: 'postgres',
    password: '',
    synchronize: false,
    logging: false,
  }

  public static typeOrmOption4ParachainBalanceDB = {
    ...this.postgresConnection,
    database: 'prod-xxx-balance',
  };


  public static ParachainEndpoint: string = "ParachainEndpoint";
  public static ParachainName: string = 'ParachainName';
}

