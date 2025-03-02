import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const loggesUser = localStorage.getItem('incidentUser');
  const router = inject(Router);

  if (loggesUser !== null) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
