import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
import {OnActivate, RouteSegment, RouteTree } from '@angular/router';

@Component({
  selector: 'sd-login',
  templateUrl: 'app/components/login-form.component.html'
})

export class LoginForm implements OnActivate {
  public authCredentials: any;
  public errorMessage:any;
  public show = false;
  protected router: Router;

  constructor(router: Router){
    this.authCredentials = {};
    this.router = router;

    this.show = true;
  }

  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
    if(localStorage.getItem('authToken')){
      this.gotoAdmin();
    }
  }

  gotoAdmin(): void {
    this.router.navigateByUrl('/admin');
  }

  login(): void {
    if(this.authCredentials.login == 'test' && this.authCredentials.password == 'test'){
      localStorage.setItem('authToken', 'true');
      this.gotoAdmin();
    }else{
      this.errorMessage = 'Wrong credentials, try "test" and "test"';
    }
  }
}

@Component({template: ''})
export class LoginRedirector {
  constructor(router: Router){
    if(document.location.pathname == '/logout'){
      localStorage.removeItem('authToken');
      return router.navigateByUrl('/login');
    }

    router.navigateByUrl('/login');
  }
}

