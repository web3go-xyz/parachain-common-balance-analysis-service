import { Column, Entity, Index } from "typeorm";

@Index("endoweds_pkey", ["id"], { unique: true })
@Entity("endoweds", { schema: "public" })
export class Endoweds {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("numeric", { name: "block_number", nullable: true })
  blockNumber: string | null;

  @Column("text", { name: "account_id" })
  accountId: string;

  @Column("numeric", { name: "free_balance", nullable: true })
  freeBalance: string | null;

  @Column("numeric", { name: "reserve_balance", nullable: true })
  reserveBalance: string | null;

  @Column("numeric", { name: "total_balance", nullable: true })
  totalBalance: string | null;
 

  @Column("timestamp without time zone", { name: "timestamp", nullable: true })
  timestamp: Date | null;
}
