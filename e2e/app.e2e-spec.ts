import { MyHomeWorkPage } from './app.po';

describe('my-home-work App', () => {
  let page: MyHomeWorkPage;

  beforeEach(() => {
    page = new MyHomeWorkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
