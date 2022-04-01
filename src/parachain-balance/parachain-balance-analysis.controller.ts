import {
  Body,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { HttpCacheInterceptor } from 'src/common/interceptor/HttpCacheInterceptor';
import { AccountDetailRequest } from 'src/viewModel/parachain-balance/AccountDetailRequest';
import { AccountDetailResponse } from 'src/viewModel/parachain-balance/AccountDetailResponse';
import { AccountSimpleRequest } from 'src/viewModel/parachain-balance/AccountSimpleRequest';
import { AccountSimpleResponse } from 'src/viewModel/parachain-balance/AccountSimpleResponse';
import { AccountsRequest } from 'src/viewModel/parachain-balance/AccountsRequest';
import { AccountsResponse } from 'src/viewModel/parachain-balance/AccountsResponse';
import { ParachainBalanceAnalysisService } from './parachain-balance-analysis.service';

@UseInterceptors(HttpCacheInterceptor)
@Controller('balance-analysis')
export class ParachainBalanceAnalysisController {
  constructor(private readonly service: ParachainBalanceAnalysisService) { }

  @Post('/getAccounts')
  @ApiOperation({
    summary: 'get account list;获取所有在链上的账户列表',
  })
  @ApiOkResponse({ type: AccountsResponse })
  getAccounts(@Body() request: AccountsRequest): Promise<AccountsResponse> {
    return this.service.getAccounts(request);
  }

  @Post('/getAccountSimple')
  @ApiOperation({ summary: 'get account simple information;获取账户基本信息' })
  @ApiOkResponse({ type: AccountSimpleResponse })
  getAccountSimple(
    @Body() request: AccountSimpleRequest,
  ): Promise<AccountSimpleResponse> {
    return this.service.getAccountSimple(request);
  }

  @Post('/getAccountDetail')
  @ApiOperation({
    summary: 'get account detail;获取账户详细信息， 包含历史活动记录',
  })
  @ApiOkResponse({ type: AccountDetailResponse })
  getAccountDetail(
    @Body() request: AccountDetailRequest,
  ): Promise<AccountDetailResponse> {
    return this.service.getAccountDetail(request);
  }
}
