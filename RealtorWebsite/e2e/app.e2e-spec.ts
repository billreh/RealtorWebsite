import { RealtorWebsitePage } from './app.po';

describe('realtor-website App', function() {
  let page: RealtorWebsitePage;

  beforeEach(() => {
    page = new RealtorWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
