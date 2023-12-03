import { Body, Controller, Get,Post } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserInput } from './dto/createUser.input';

@Controller()
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.fetchUserInfoService();
  }
  @Post()
  createUser(@Body() createUserInput:CreateUserInput){
    return this.userService.createUserService({createUserInput});
  }
}