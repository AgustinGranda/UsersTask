import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { LoginService } from 'src/login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly loginService: LoginService,
        private readonly jwtService: JwtService,
      ) {}
    

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    
    const token = request.headers['auth']
    
    return this.loginService.verifyToken(token) 
  }
}