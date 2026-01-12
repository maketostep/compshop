import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaService } from './prisma.service.js';
import { UserController } from './user.controller.js';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
