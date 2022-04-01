import { Column, Entity, Index } from "typeorm";

@Index("withdraws_pkey", ["id"], { unique: true })
@Entity("withdraws", { schema: "public" })
export class Withdraws {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("numeric", { name: "block_number", nullable: true })
  blockNumber: string | null;

  @Column("text", { name: "account_id" })
  accountId: string;

 

  @Column("numeric", { name: "balance_change", nullable: true })
  balanceChange: string | null;

  @Column("timestamp without time zone", { name: "timestamp", nullable: true })
  timestamp: Date | null;
}
