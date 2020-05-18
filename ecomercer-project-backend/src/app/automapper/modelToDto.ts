import 'automapper-ts';

export class ModelToDto {
  constructor() {
    this.setMap();
  }

  private setMap(): void {
    automapper.initialize((config: AutoMapperJs.IConfiguration) => {
      config.createMap('Product', 'ProductDto');
      config.createMap('Brand', 'BrandDto');
    });
  }
}
