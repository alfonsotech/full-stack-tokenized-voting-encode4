import { Injectable } from '@nestjs/common';
import * as tokenJson from './assets/MyToken.json';
import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    return 'Hello Worlds of Wonder!';
  }
  getContractAddress(): string {
    return this.configService.get<string>('TOKEN_CONTRACT_ADDRESS');
  }

  async getTokenName(): Promise<string> {
    const publicClient = createPublicClient({
      chain: sepolia,
      transport: http(this.configService.get<string>('RPC_ENDPOINT_URL')),
    });
    const name = await publicClient.readContract({
      address: `0x${this.getContractAddress().slice(2)}` as `0x${string}`,
      abi: tokenJson.abi,
      functionName: 'name',
    });
    return name as string;
  }}
