import { IApiEntity, IApiService } from '_store/API/service/api.interface';

export class StaticApi implements IApiEntity {
  service: IApiService;
  baseRoute: string;

  constructor(service: IApiService) {
    this.service = service;
    this.baseRoute = '/static';
  }

  get(url: string) {
    return `${this.service.baseUrl}${this.baseRoute}/${url}`;
  }
}
