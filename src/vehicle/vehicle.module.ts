import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { VehicleCommand } from './vehicle.commend';
import { VehicleService } from './vehicle.service';

@Module({
  imports: [HttpModule],
  providers: [VehicleCommand, VehicleService],
})
export class VehicleModule {}
