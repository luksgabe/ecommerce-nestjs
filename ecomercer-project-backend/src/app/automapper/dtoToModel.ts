import 'automapper-ts';

export class DtoToModel {
  public setMap(): void {
    automapper.initialize((config: AutoMapperJs.IConfiguration) => {
      config.createMap('ProductDto', 'Product');
      config.createMap('BrandDto', 'Brand');
      config.createMap('ProductCategoryDto', 'ProductCategory');
    });
  }
}
