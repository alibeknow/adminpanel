import { Inject, Injectable, Optional } from '@nestjs/common';
import { HealthCheckError, HealthIndicator } from '@nestjs/terminus';

@Injectable()
export class ServiceHealthIndicator extends HealthIndicator {
  constructor() {
    super();
  }
}
