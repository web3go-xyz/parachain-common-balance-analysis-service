import { ApiProperty } from '@nestjs/swagger';
import { Accounts } from 'src/common/entity/ParachainBalanceModule/Accounts';

export class AccountSimpleResponse {
  @ApiProperty({ default: '' })
  account: Accounts;
}
