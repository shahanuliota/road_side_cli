import { Command, CommandRunner, Option } from 'nest-commander';
import { Logger, LoggerService } from '@nestjs/common';
import { VehicleService } from './vehicle.service';

interface BasicCommandOptions {
  number?: number;
}

@Command({ name: 'vehicle', description: 'A parameter parse' })
export class VehicleCommand implements CommandRunner {
  private readonly logService: LoggerService = new Logger('VEHICLE');
  //

  constructor(private vehicleService: VehicleService) {}
  async run(
    passedParam: string[],
    options?: BasicCommandOptions,
  ): Promise<void> {
    this.logService.log(options?.number);

    if (options?.number) {
      console.log('--runWithNumber----');
      this.runWithNumber(passedParam, options.number);
    } else {
      console.log('----runWithNone--');
      this.runWithNone(passedParam);
    }

    // if (options?.boolean !== undefined && options?.boolean !== null) {
    //   this.runWithBoolean(passedParam, options.boolean);
    // } else if (options?.number) {
    //   this.runWithNumber(passedParam, options.number);
    // } else if (options?.string) {
    //   this.runWithString(passedParam, options.string);
    // } else {
    //   this.runWithNone(passedParam);
    // }
  }

  runWithNumber(param: string[], option: number): void {
    this.vehicleService.createVehicle(param, option);
  }

  @Option({
    flags: '-n, --new [number]',
    description: 'A basic number parser',
  })
  parseNumber(val: string): number {
    return Number(val);
  }

  runWithNone(param: string[]): void {
    this.logService.log({ param });
  }
}
