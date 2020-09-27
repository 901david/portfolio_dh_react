export class UrlService {
  constructor() {
    this.env = process.env.NODE_ENV === 'prod' ? 'production' : 'development';
    this.envMap = {
      production: 'Prod',
      development: 'Dev',
    };
    this.baseUrl = `https://amgzjh5om7.execute-api.us-west-2.amazonaws.com/${
      this.envMap[this.env]
    }`;
  }
}
