import { HttpException, Injectable, Logger, Scope, UnauthorizedException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user_info } from './entity/user.entity';
import { CreateUserReq } from './interfaces/user.interface';
import { AuthService } from '../auth/auth.service';


@Injectable({scope: Scope.DEFAULT})
export class UserService {
private readonly log = new Logger(AuthService.name)
  constructor(
    @InjectRepository(user_info)
    private readonly uiRepository : Repository<user_info>,
  ){}

  async createUserService({createUserInput}:CreateUserReq){
    try{
      if(createUserInput.user_email.split('@')[1]!=='mococo.co.kr'){
        throw new UnauthorizedException('모코코 이메일이 아닙니다')
      }
 
      const savedResult = await this.uiRepository.insert(createUserInput)
      console.log(savedResult)
      if(savedResult.generatedMaps)
      return {message:'회원가입에 성공하였습니다'}
    }catch(err){
      this.log.error(err)
      throw err;}
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
