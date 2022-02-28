import AppService from './AppService';

class UserService extends AppService {
  me() {
    return this.http.get('/me');
  }

  logout() {
    return this.http.post('/auth/logout')
  }

}

export default new UserService();
