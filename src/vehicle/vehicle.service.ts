import { HttpService } from '@nestjs/axios';
import { Injectable, Logger, LoggerService } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class VehicleService {
  constructor(private readonly httpService: HttpService) {}

  private readonly logService: LoggerService = new Logger('VEHICLE_SERVICES');

  async createVehicle(param: string[], option: number) {
    this.logService.log({ param, option });
    for (let index = 0; index < option; index++) {
      this.logService.log(faker.vehicle.vehicle);
    }
  }

  async createvehicleapi(): Promise<void> {
    try {
    } catch (e) {
      this.logService.error(e);
    }
  }
}
