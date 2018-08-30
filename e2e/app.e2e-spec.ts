import { TaskTimerPage } from './app.po';

describe('task-timer App', function() {
  let page: TaskTimerPage;

  beforeEach(() => {
    page = new TaskTimerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
