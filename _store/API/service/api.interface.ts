export interface IApiService {
  manager: any;
  baseUrl: string;
  get: <T>(url: string, options?: any) => Promise<T>;
  post: <T>(url: string, data: any, options?: any) => Promise<T>;
}

export interface IApiEntity {
  service: IApiService;
  baseRoute: string;
}
