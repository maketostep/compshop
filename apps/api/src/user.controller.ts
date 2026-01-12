import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';

@Controller('users')
export class UserController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getAll() {
    return this.prisma.user.findMany();
  }
}
