import { Module } from "@nestjs/common";
import { ReservationsModule } from "./apis/reservations/reservations.module";
import { UsersModule } from "./apis/user/users.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { DbcModule } from "./apis/dbc/dbc.module";

@Module({
    imports:[
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: "src/commons/graphql/schema.gql"
        }),
        ReservationsModule, UsersModule, DbcModule],
})

export class AppModule{}