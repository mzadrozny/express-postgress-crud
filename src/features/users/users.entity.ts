import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;
}