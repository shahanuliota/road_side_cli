import { HttpService } from '@nestjs/axios';
import { Injectable, Logger, LoggerService } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class VehicleService {
  // constructor(private readonly httpService: HttpService) {}
  private readonly logService: LoggerService = new Logger('VEHICLE_SERVICES');
  async createVehicle(param: string[], option: number) {
    this.logService.log({ param, option });
    for (let index = 0; index < option; index++) {
      this.logService.log(faker.name.findName());
    }
  }
}
