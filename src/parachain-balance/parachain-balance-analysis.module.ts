import { CacheModule, Module } from '@nestjs/common';
import { databaseProviders_parachain_balance } from 'src/common/orm/database.providers.v2';
import { repositoryProviders_parachain_balance } from 'src/common/orm/repository.provider.v2/parachain.balance';


import { ParachainBalanceAnalysisController, } from './parachain-balance-analysis.controller';
import { ParachainBalanceAnalysisService, } from './parachain-balance-analysis.service';

@Module({
  imports: [
    CacheModule.register({
      ttl: 60,
    }),
  ],
  controllers: [ParachainBalanceAnalysisController],
  providers: [
    ...databaseProviders_parachain_balance,
    ...repositoryProviders_parachain_balance,
    ParachainBalanceAnalysisService,
  ],
})
export class ParachainBalanceAnalysisModule { }
