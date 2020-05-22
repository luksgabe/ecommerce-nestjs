import { ModelToDto } from './modelToDto';
import { DtoToModel } from './dtoToModel';

export class AutoMapperConfig {
  //public static mapperList: Array<any> = [new ModelToDto(), new DtoToModel()];

  public static mapperInit() {
    const convertModel: ModelToDto = new ModelToDto();
    const convertDto: DtoToModel = new DtoToModel();

    convertModel.setMap();
    convertDto.setMap();
  }
}
