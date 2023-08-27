import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

  let service: UniqueIdService;

  beforeEach(()=>{
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.genereteUniqueIdWithPrefix.name }
  should generate id when called with prefix.`, ()=>{
    const id = service.genereteUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();

    expect(true).toBeTrue(); // só funciona se for literal
    expect(true).toBe(true); //referencias de memorias distintas (objetos diferentes)
    expect(true).toBeTruthy();
  });

  it(`#${UniqueIdService.prototype.genereteUniqueIdWithPrefix.name }
  should not generate duplicate IDs called multiple times.`, ()=>{
    const ids = new Set();
    for(let i = 0; i < 50; i++){
      ids.add(service.genereteUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.genereteUniqueIdWithPrefix.name }
  should return the number of generatedIds when called.`, ()=>{
    service.genereteUniqueIdWithPrefix('app')
    service.genereteUniqueIdWithPrefix('app')
    expect(service.getNumberOfGenerateUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.genereteUniqueIdWithPrefix.name }
  should throw when called with empty.`, ()=>{
    const emptyValues = [null, undefined, '', '0', '1'];

    emptyValues.forEach(emptyValue => {
      expect(()=> service.genereteUniqueIdWithPrefix(emptyValue))
      .withContext(`Empty value: ${emptyValue}`)
      .toThrow();
    })
  });

});
