import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginDataService } from '../login-service.service';

export const adminauthGuard: CanActivateFn = (route, state) => {
  const currentMenu = route.url[0].path;
  const router = inject(Router)
  const service = inject(LoginDataService)

  if (!service.isLoggedIn('Admin')) {
    router.navigate(['/login']);
    return false;
  }

  return service.isLoggedIn('Admin');
};
