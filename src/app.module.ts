import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BasicCommand } from './basic.commend';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [VehicleModule, HttpModule],
  providers: [BasicCommand],
})
export class AppModule {}
