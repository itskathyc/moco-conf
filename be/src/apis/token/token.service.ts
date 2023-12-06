import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  private readonly log = new Logger(TokenService.name);
  constructor(private readonly jwtService: JwtService) {}

  createAccessToken({ uid }) {
    const accessToken = this.jwtService.sign(
      { sub: uid },
      {
        algorithm: 'HS256',
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_EXP,
      },
    );
    console.log(accessToken);
  }
}
