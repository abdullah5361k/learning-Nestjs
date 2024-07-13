import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"user-profile"})
export class UserProfile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phoneNo: string;

    @OneToOne(() => User, (user) => user.profile, {onDelete: "CASCADE"})
    @JoinColumn() // This specify that the table contain the FK
    user: User;


}