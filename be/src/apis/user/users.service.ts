import { Injectable, Scope } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user_info } from './entity/user.entity';
import { CreateUserReq } from './interfaces/user.interface';


@Injectable({scope: Scope.DEFAULT})
export class UserService {

  constructor(
    @InjectRepository(user_info)
    private readonly rsvRepository : Repository<user_info>,
  ){}

  async createUserService({createUserInput}:CreateUserReq){
    try{
      
    }catch(err){throw err}
  }

  fetchUserInfoService() {
  }

  

  updateReservationService(){
    return
  }

  deleteReservaitonService(){
    return
  }
}
