import { createConnection } from 'typeorm';
import { join } from 'path';
import { RepositoryConsts } from '../repositoryConsts';
import { AppConfig } from '../../setting/appConfig';

export const databaseProviders_parachain_balance = [
  {
    provide: RepositoryConsts.DATABASE_CONNECTION_PARACHAIN_BALANCE,
    useFactory: async () => {
      let connectionOption: any = {
        ...AppConfig.typeOrmOption4ParachainBalanceDB,
        entities: [
          join(__dirname, '../..', 'entity', 'ParachainBalanceModule', '*.{js,ts}'),
        ],
      };
      return await createConnection(connectionOption);
    },
  },
];
