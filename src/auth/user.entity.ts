import * as bcrypt from 'bcrypt';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';


@Entity()
@Unique(['email'])
export class User extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    
    @Column()
    salt: string;

    // @OneToMany(type => Task, task => task.user, {eager: true})
    // tasks: Task[];


    async validatePassword(password: string): Promise<boolean>{
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }


}