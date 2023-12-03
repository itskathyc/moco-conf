import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserInput{
    @IsNotEmpty()
    @IsString()
    user_email:string;
    @IsNotEmpty()
    @IsString()
    user_name:string;
    @IsNotEmpty()
    @IsString()
    user_dept:string;
    @IsNotEmpty()
    @IsString()
    user_passwd:string;
}
