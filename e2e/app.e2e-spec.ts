import { SatiricalQuestPage } from './app.po';

describe('satirical-quest App', () => {
  let page: SatiricalQuestPage;

  beforeEach(() => {
    page = new SatiricalQuestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
