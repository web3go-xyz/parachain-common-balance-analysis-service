import { Column, Entity, Index } from "typeorm";

@Index("reserv_repatriateds_pkey", ["id"], { unique: true })
@Entity("reserv_repatriateds", { schema: "public" })
export class ReservRepatriateds {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("numeric", { name: "block_number", nullable: true })
  blockNumber: string | null;

  @Column("text", { name: "to_account_id" })
  toAccountId: string;

  @Column("text", { name: "from_account_id" })
  fromAccountId: string;

  @Column("text", { name: "status", nullable: true })
  status: string | null;

  @Column("numeric", { name: "balance_change", nullable: true })
  balanceChange: string | null;

 

  @Column("timestamp without time zone", { name: "timestamp", nullable: true })
  timestamp: Date | null;
}
