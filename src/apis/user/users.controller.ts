import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.fetchUserInfoService();
  }
}