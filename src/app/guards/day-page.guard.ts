import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DayPageGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id=route.paramMap.get('id');
    const user=route.paramMap.get('user');
    const currentDay = (new Date()).getDate();
    if (id!==null && user!==null && +(id as string)>0 && +(id as string) <25 && +id <= currentDay )
      return true;
    else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
