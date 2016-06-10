import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {NameListService} from '../shared/index';
import {ProjectsService} from '../shared/index';
import {TodosService} from '../shared/index';
import {HomeComponent} from '../+home/index';
import {AboutComponent} from '../+about/index';
import {ProjectsComponent} from '../+projects/index';
import {TodosComponent} from '../+todos/index';
import {UsersComponent} from '../+users/index';
import {View} from '@angular/core';
import {LoginForm, LoginRedirector} from './login.component';

import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
@Component({
  viewProviders: [NameListService, ProjectsService, TodosService],
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
@Routes([
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/projects',
    component: ProjectsComponent
  },
  {
    path: '/todos',
    component: TodosComponent
  },
  {
    path: '/users',
    component: UsersComponent
  },
  {
    path: '/about',
    component: AboutComponent
  }
])

export class AppComponent implements OnActivate {
  protected router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
    if(!localStorage.getItem('authToken')){
      this.router.navigateByUrl('/login');
    }
  }
}

@Component({
  selector: 'sd-app',
  //viewProviders: [NameListService, ProjectsService, TodosService],
  templateUrl: 'app/components/authapp.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {
    path: '/login',
    component: LoginForm
  },
  {
    path: '/admin',
    component: AppComponent
  },
  {
    path: '/',
    component: LoginRedirector
  },
  {
    path: '*',
    component: LoginRedirector
  }
])
export class AppWithAuthComponent {}
