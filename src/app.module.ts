import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicCommand } from './basic.commend';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, BasicCommand],
})
export class AppModule {}
