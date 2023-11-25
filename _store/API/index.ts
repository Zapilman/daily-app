import { PostApi } from './entities/Post';
import { StaticApi } from './entities/Static';
import ApiService from './service/nextService';

class API {
  static Post = new PostApi(ApiService);
  static Static = new StaticApi(ApiService);
}

export default API;
