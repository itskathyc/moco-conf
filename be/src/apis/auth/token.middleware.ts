// /* eslint-disable prefer-const */
// import {
//     BadRequestException,
//     HttpException,
//     HttpStatus,
//     Injectable,
//     NestMiddleware,
//     UnauthorizedException,
//     ForbiddenException,
//   } from '@nestjs/common';
//   import { Request, Response, NextFunction } from 'express';
//   import { TokenService } from 'src/apis/token/token.service';
  
//   @Injectable()
//   export class onlyAccessMiddleware implements NestMiddleware {
//     constructor(private readonly tokenService: TokenService) {}
//     async use(req: Request, res: Response, next: NextFunction) {
//       //사용자 정보가 필요한 api 선행되어야 하는 로그인 관련 미들웨어
//       let accessToken: string | undefined;
//       accessToken = req.headers['authorization'];
//       //헤더와 쿠키에 값이 있는지 확인
//       if (!accessToken)
//         throw new HttpException(
//           {
//             statusCode: '283',
//             message: '로그인이 필요합니다',
//           },
//           283,
//         );
//       //헤더의 값을 토큰의 형태로 가공
//       //const modifiedAccessToken = accessToken.replace('bearer ', '');
//       let modifiedAccessToken = accessToken.replace('bearer ', '');
//       modifiedAccessToken = modifiedAccessToken.replace('Bearer ', '');
  
//       try {
//         //토큰 검증 진행
//         const isVerified = this.tokenService.verifyToken({
//           token: modifiedAccessToken,
//           key: process.env.ACCESS_TOKEN_SECRET,
//         });
//         //console.log(isVerified);
//         //여기에 값이 찍힌다는 것은 액세스토큰이 만기는 아니라는 뜻
//         //토큰의 상태를 확인해 봅니다
//         let current_state: string;
//         try {
//           current_state = await this.tokenService.checkTokenState({
//             token: modifiedAccessToken,
//           });
//         } catch (err) {
//           throw new HttpException(
//             {
//               statusCode: '282',
//               message: '액세스 토큰 만기',
//               error: 'access token expired',
//             }, //여긴 그냥 리스폰스로 가는 객체
//             282, //이게 실제 브라우저에 나타나는 상태
//           );
//         }
//         //console.log(current_state);
//         if (current_state === 'P')
//           throw new HttpException(
//             {
//               statusCode: '283',
//               message: '다시 로그인해주세요',
//               error: '로그아웃된 상태입니다',
//             }, //여긴 그냥 리스폰스로 가는 객체
//             283, //이게 실제 브라우저에 나타나는 상태
//           );
//         //throw new CustomException('메세지', '5678');
//         //리턴할 액세스 토큰에 정상값  할당
//         accessToken = modifiedAccessToken;
//         //
//       } catch (err) {
//         //토큰 검증 결과 만기 시 이쪽으로 옵니다
//         throw err;
//       }
  
//       const tokens = { accessToken };
//       req.body.tokens = tokens;
//       req.res.locals.tokens = tokens;
//       console.log('middleware는 정상작동 하였습니다');
//       next();
//     }
//   }
  