import 'automapper-ts';

export class DtoToModel {
  constructor() {
    this.setMap();
  }

  private setMap(): void {
    automapper.initialize((config: AutoMapperJs.IConfiguration) => {
      config.createMap('ProductDto', 'Product');
      config.createMap('BrandDto', 'Brand');
    });
  }
}
