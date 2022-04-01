import { ApiProperty } from '@nestjs/swagger';
import { Accounts } from 'src/common/entity/ParachainBalanceModule/Accounts';
import { PageResponse } from '../base/pageResponse';

export class AccountsResponse extends PageResponse {
  @ApiProperty()
  list: Accounts[];
}
