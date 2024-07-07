import { UserProfile } from "src/user-profile/entites/user-profile.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "user"})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    rollNo: string;

    @OneToOne(() => UserProfile, (profile) => profile.user, {cascade: true})
    profile: UserProfile;
}