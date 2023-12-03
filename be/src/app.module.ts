import { Module } from "@nestjs/common";
import { ReservationsModule } from "./apis/reservations/reservations.module";
import { UsersModule } from "./apis/user/users.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { DbcModule } from "./apis/dbc/dbc.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./apis/auth/auth.module";
import { WinstonModule, utilities } from 'nest-winston'
import winston from "winston";
@Module({
    imports:[
        ConfigModule.forRoot({isGlobal: true, envFilePath : './.env'}),
        // GraphQLModule.forRoot<ApolloDriverConfig>({
        //     driver: ApolloDriver,
        //     autoSchemaFile: "src/commons/graphql/schema.gql"
        // }),
        ReservationsModule, UsersModule, DbcModule,TypeOrmModule.forRoot({
            type:'mariadb',host:process.env.DATABASE_HOST,port:Number(process.env.DATABASE_PORT),username:process.env.DATABASE_USERNAME,password:process.env.DATABASE_PASSWORD,database:process.env.DATABASE_DATABASE,entities:[__dirname + '/apis/**/*.entity.*'],logging:true,synchronize:true
        }),
    AuthModule,
    WinstonModule.forRoot({
        transports: [
          new winston.transports.Console({
            //콘솔출력 지정
            level: 'info',
            format: winston.format.combine(
              winston.format.timestamp(),
              utilities.format.nestLike('mococo-aca', { prettyPrint: true }),
            ),
          }),
        ],
      }),],

})

export class AppModule{}