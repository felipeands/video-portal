import { AppPage } from './app.po';

describe('video-portal Login', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display form header', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Login');
  });
});
