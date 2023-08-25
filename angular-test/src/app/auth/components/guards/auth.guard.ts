import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const AuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLogged()) {
    router.navigate(['/auth', 'log-in']);
    return false;
  }
  authService.isLogged();
  return true;
};
