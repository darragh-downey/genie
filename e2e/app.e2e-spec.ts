import { GeniePage } from './app.po';

describe('genie App', () => {
  let page: GeniePage;

  beforeEach(() => {
    page = new GeniePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
