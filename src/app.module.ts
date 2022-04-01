import { Module } from '@nestjs/common';
import { StatusMonitorModule } from 'nestjs-status-monitor';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ParachainBalanceAnalysisModule } from './parachain-balance/parachain-balance-analysis.module';
@Module({
  imports: [
    ScheduleModule.forRoot(),
    StatusMonitorModule.forRoot(),
    ParachainBalanceAnalysisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
