import { Connection } from 'typeorm';
import { RepositoryConsts } from '../repositoryConsts';
import { Accounts } from '../../entity/ParachainBalanceModule/Accounts';
import { BalanceSets } from '../../entity/ParachainBalanceModule/BalanceSets';
import { Deposits } from '../../entity/ParachainBalanceModule/Deposits';
import { Endoweds } from '../../entity/ParachainBalanceModule/Endoweds';
import { Reserveds } from '../../entity/ParachainBalanceModule/Reserveds';
import { ReservRepatriateds } from '../../entity/ParachainBalanceModule/ReservRepatriateds';
import { Slashes } from '../../entity/ParachainBalanceModule/Slashes';
import { Transfers } from '../../entity/ParachainBalanceModule/Transfers';
import { Unreserveds } from '../../entity/ParachainBalanceModule/Unreserveds';
import { Withdraws } from '../../entity/ParachainBalanceModule/Withdraws';
import { AccountsLatestSyncBlock } from '../../entity/ParachainBalanceModule/AccountsLatestSyncBlock';

export const repositoryProviders_parachain_balance = [
  {
    provide: RepositoryConsts.PARACHAIN_BALANCE_ACCOUNT_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Accounts);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_PARACHAIN_BALANCE],
  },

  {
    provide: RepositoryConsts.PARACHAIN_BALANCE_BALANCE_SETS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(BalanceSets);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_PARACHAIN_BALANCE],
  },
  {
    provide: RepositoryConsts.PARACHAIN_BALANCE_DEPOSITS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Deposits);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_PARACHAIN_BALANCE],
  },
  {
    provide: RepositoryConsts.PARACHAIN_BALANCE_ENDOWEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Endoweds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_PARACHAIN_BALANCE],
  },
  {
    provide: RepositoryConsts.PARACHAIN_BALANCE_RESERVEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Reserveds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_PARACHAIN_BALANCE],
  },
  {
    provide: RepositoryConsts.PARACHAIN_BALANCE_RESERVREPATRIATEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(ReservRepatriateds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_PARACHAIN_BALANCE],
  },

  {
    provide: RepositoryConsts.PARACHAIN_BALANCE_SLASH_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Slashes);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_PARACHAIN_BALANCE],
  },

  {
    provide: RepositoryConsts.PARACHAIN_BALANCE_TRANSFERS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Transfers);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_PARACHAIN_BALANCE],
  },

  {
    provide: RepositoryConsts.PARACHAIN_BALANCE_UNRESERVEDS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Unreserveds);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_PARACHAIN_BALANCE],
  },

  {
    provide: RepositoryConsts.PARACHAIN_BALANCE_WITHDRAWS_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Withdraws);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_PARACHAIN_BALANCE],
  },

  {
    provide: RepositoryConsts.PARACHAIN_BALANCE_ACCOUNTS_LATEST_SYNC_BLOCK_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(AccountsLatestSyncBlock);
    },
    inject: [RepositoryConsts.DATABASE_CONNECTION_PARACHAIN_BALANCE],
  },
];

