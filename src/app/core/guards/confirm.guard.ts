import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
export const confirmGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log(route.routeConfig?.path); // можно получить различную информацию о маршрутах, параметрах и ит.д.
  return confirm('Вы уверены, что хотите перейти?');
};
