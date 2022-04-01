import { Column, Entity, Index } from "typeorm";

@Index("accounts_latest_sync_block_pkey", ["id"], { unique: true })
@Entity("accounts_latest_sync_block", { schema: "public" })
export class AccountsLatestSyncBlock {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("text", { name: "chain_name" })
  chain_name: string;

  @Column("text", { name: "ws_endpoint" })
  ws_endpoint: string;

  @Column("numeric", { name: "block_number", comment: 'the block_number synced with account balance' })
  blockNumber: number;

  @Column("timestamp", { name: "sync_time" })
  sync_time: Date;
}