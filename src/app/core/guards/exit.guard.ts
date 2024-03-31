import { Page2Component } from 'src/app/page2/page2.component';

export const exitGuard = (component: Page2Component) => {
  if (!component.saved) {
    return confirm('Вы хотите покинуть страницу?');
  }
  return true;
};
