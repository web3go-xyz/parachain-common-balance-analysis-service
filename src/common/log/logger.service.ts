import { Injectable, ConsoleLogger } from '@nestjs/common';

@Injectable()
export class W3Logger extends ConsoleLogger {
  modulePrefix: string = 'unknown';
  constructor(modulePrefix: string) {
    super();
    this.modulePrefix = modulePrefix;
  }
  prefix() {
    return `[${this.modulePrefix}] `;
  }
  constructMessage(msgObj: any[]) {
    let message = this.prefix();
    if (msgObj && msgObj.length > 0) {
      for (let index = 0; index < msgObj.length; index++) {
        const element = msgObj[index];
        if (typeof element === 'string') {
          message += ' ' + element;
        }
        else {
          message += ' ' + JSON.stringify(element);
        }
      }
    }
    return message;
  }
  debug(...msgObj: any[]) {
    super.debug(this.constructMessage(msgObj), '');
  }
  warn(...msgObj: any[]) {
    super.warn(this.constructMessage(msgObj), '');
  }
  verbose(...msgObj: any[]) {
    super.verbose(this.constructMessage(msgObj), '');
  }
  error(...msgObj: any[]) {
    super.error(this.constructMessage(msgObj), '');
  }
  log(...msgObj: any[]) {
    super.log(this.constructMessage(msgObj), '');
  }
}
