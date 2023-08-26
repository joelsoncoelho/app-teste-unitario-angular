import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

  it(`#${UniqueIdService.prototype.genereteUniqueIdWithPrefix.name } should generate id when called with prefix`, ()=>{
    const service = new UniqueIdService();
    const id = service.genereteUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  });

});
