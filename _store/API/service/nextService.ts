import { IApiService } from './api.interface';

class NextApiService implements IApiService {
  manager: typeof fetch;
  baseUrl = 'http://18.197.70.51:8080/api';

  constructor() {
    this.manager = fetch;
  }
  //   get: <T>(url: string) => Promise<T>;
  async get<T>(url: string, options?: RequestInit): Promise<T> {
    return (await this.manager(this.baseUrl + url, options)).json() as T;
  }
  //   post: <T>(url: string, data: any) => Promise<T>;
  async post<T>(url: string, options?: RequestInit): Promise<T> {
    return (
      await this.manager(this.baseUrl + url, { ...options, method: 'post' })
    ).json() as T;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new NextApiService();
