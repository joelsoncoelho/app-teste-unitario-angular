import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {

  private numberOfGenerateIds = 0;

  public genereteUniqueIdWithPrefix(prefix: string): string {
    const uniqueId = this.generateUniqueId();

    if(!prefix){
       throw Error('Prefix can not be empty');
    }

    this.numberOfGenerateIds++;
    return `${prefix}-${uniqueId}`;
  }

  private generateNumberOfGenerateUniqueIds(): number {
    return this.numberOfGenerateIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
