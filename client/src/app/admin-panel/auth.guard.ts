import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private adminService: AdminService, 
    private router: Router
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      if ( !this.adminService.isLoggedIn() ) {
        console.log("routeeeeeeee");
        
        this.router.navigateByUrl('/admin-login');
        this.adminService.removeToken(); 
        return false; 
        
      } 
        return true;
  }
  
}
