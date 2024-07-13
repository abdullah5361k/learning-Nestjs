import { UserPosts } from "src/user-posts/entities/user-posts.entity";
import { UserProfile } from "src/user-profile/entites/user-profile.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => UserPosts, (posts) => posts.user)
    posts: UserPosts[];
}