import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
@Injectable()
export class AdminGuard implements CanActivate, CanLoad {


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean> | boolean  {
    return false;
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return false;
  }

}
