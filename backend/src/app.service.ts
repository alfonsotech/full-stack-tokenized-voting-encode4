import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Worlds of Wonder!';
  }
  getContractAddress(): string {
    return '0xc89e7284cf41ecfd96afa858019617f1388c6e30';
  }
}
