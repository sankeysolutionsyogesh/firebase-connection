import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginDataService } from '../login-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const currentMenu = route.url[0].path;
  const router = inject(Router)
  const service = inject(LoginDataService)

  if (!service.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }
  return service.isLoggedIn();
};