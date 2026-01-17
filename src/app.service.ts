import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

export interface Application {
  name: string;
  url: string;
  description: string;
}

export interface Config {
  applications: Application[];
}

@Injectable()
export class AppService {
  private configPath: string;

  constructor() {
    this.configPath = path.join(process.cwd(), 'config.json');
  }

  getApplications(): Application[] {
    try {
      const configData = fs.readFileSync(this.configPath, 'utf8');
      const config: Config = JSON.parse(configData);
      return config.applications;
    } catch (error) {
      console.error('Error reading config.json:', error);
      return [];
    }
  }
}
