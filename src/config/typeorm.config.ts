import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/auth/user.entity";

// export const typeOrmConfig: TypeOrmModuleOptions = {
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'postgres',
//     password: 'qetu1357',
//     database: 'img_project',
//     // logging:true,
//     // entities: [__dirname + '/../**/*.entity.{js,ts}',ShppingCart,ContactUsEntity ],
//     entities: [ShppingCart,ContactUs, User, ImgListBySubject, cardImgList, ChatMessages],
//     synchronize: true
// };

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    // url: 'postgres://pnrjlkin:ADl3zxTHyFr1kQd6ns2jpyMXTSzXN0wC@hattie.db.elephantsql.com:5432/pnrjlkin',
     url: 'postgres://xzpvdliw:pDjMaRAulEvBInB0XmGYRAqKGBp0dgpX@kandula.db.elephantsql.com:5432/xzpvdliw',
    autoLoadEntities: true,
    synchronize: true,
    // logging:true,
    entities: [User],
};
 