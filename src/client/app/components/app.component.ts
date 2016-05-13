import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {NameListService} from '../shared/index';
import {ProjectsService} from '../shared/index';
<<<<<<< HEAD
<<<<<<< HEAD
import {TodosService} from '../shared/index';
=======
>>>>>>> 31e2278... Improved +projects component to work with http backend
=======
import {TodosService} from '../shared/index';
>>>>>>> 0c0a90e... Made todo item component work using backend
import {HomeComponent} from '../+home/index';
import {AboutComponent} from '../+about/index';
import {ProjectsComponent} from '../+projects/index';
import {TodosComponent} from '../+todos/index';
import {UsersComponent} from '../+users/index';
<<<<<<< HEAD
<<<<<<< HEAD
import {View} from '@angular/core';
import {LoginForm, LoginRedirector} from './login.component';
=======
>>>>>>> 1afbd74... Added basic components for projects, todos, users

import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
@Component({
<<<<<<< HEAD
  viewProviders: [NameListService, ProjectsService, TodosService],
=======
  selector: 'sd-app',
<<<<<<< HEAD
  viewProviders: [NameListService, ProjectsService],
>>>>>>> 31e2278... Improved +projects component to work with http backend
=======
=======
import {View} from '@angular/core';
import {LoginForm, LoginRedirector} from './login.component';

import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
@Component({
>>>>>>> 28173ce... Added tiny auth module
  viewProviders: [NameListService, ProjectsService, TodosService],
>>>>>>> 0c0a90e... Made todo item component work using backend
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
