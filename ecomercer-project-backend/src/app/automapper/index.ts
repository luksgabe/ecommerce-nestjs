import { ModelToDto } from './modelToDto';
import { DtoToModel } from './dtoToModel';

export class AutoMapperConfig {
  public static mapperList: Array<any> = [new ModelToDto(), new DtoToModel()];
}
