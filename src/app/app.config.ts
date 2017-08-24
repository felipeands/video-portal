export class Config {

  static get videosPerPage(): number { return 10; };

  // API url
  static get api(): string { return `http://localhost:3000/`; };

  // user api
  static get api_auth(): string { return `${Config.api}user/auth`; };
  static get api_logout(): string { return `${Config.api}user/logout`; };

  // video api
  static get api_video(): string { return `${Config.api}video` }
  static get api_videos(): string { return `${Config.api}videos` }


}