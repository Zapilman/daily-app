import { IApiEntity, IApiService } from '../../service/api.interface';
import { TPost } from './post.types';

export class PostApi implements IApiEntity {
  service: IApiService;
  baseRoute: string;

  constructor(service: IApiService) {
    this.service = service;
    this.baseRoute = '/post';
  }

  async getAllPost(options?: RequestInit) {
    return this.service.get<TPost[]>(this.baseRoute, options);
  }

  async getPost(post_id: string) {
    return this.service.get<TPost>(`${this.baseRoute}/${post_id}`);
  }
}
