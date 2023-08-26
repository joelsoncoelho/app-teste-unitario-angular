import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {

  private numberOfGenerateIds = 0;

  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

  public genereteUniqueIdWithPrefix(prefix: any): string {
    const uniqueId = this.generateUniqueId();

    if(!prefix || !this.validId.test(prefix)){
       throw Error('Prefix can not be empty');
    }

    this.numberOfGenerateIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGenerateUniqueIds(): number {
    return this.numberOfGenerateIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
