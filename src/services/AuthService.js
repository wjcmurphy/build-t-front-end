import AppService from './AppService';

class AuthService extends AppService {

  register(formData) {
    return this.http.post('/auth/register', formData)
  }

  login(formData) {
    return this.http.post('/auth/login', formData)
  }

  passwordReset(formData) {
    return this.http.post('/password-reset', formData);
  }

  passwordChange(formData) {
    return this.http.post('/password-change', formData);
  }
}

export default new AuthService();
