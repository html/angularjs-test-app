import {Component} from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import {Injectable, bind} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

import {ProjectsService} from '../../shared/index';
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http'; 
=======
import {FORM_DIRECTIVES} from '@angular/common';

import {NameListService} from '../../shared/index';
>>>>>>> 1afbd74... Added basic components for projects, todos, users
=======
import {Injectable, bind} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

import {ProjectsService} from '../../shared/index';
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http'; 
>>>>>>> 31e2278... Improved +projects component to work with http backend

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+projects/components/projects.component.html',
  styleUrls: ['app/+projects/components/projects.component.css'],
<<<<<<< HEAD
<<<<<<< HEAD
  viewProviders: [HTTP_PROVIDERS],
  directives: [FORM_DIRECTIVES]
})

=======
  directives: [FORM_DIRECTIVES]
})
>>>>>>> 1afbd74... Added basic components for projects, todos, users
=======
  viewProviders: [HTTP_PROVIDERS],
  directives: [FORM_DIRECTIVES]
})

>>>>>>> 31e2278... Improved +projects component to work with http backend
export class ProjectsComponent {
  isEditing: boolean;
  newName: string;
  editableNameId: integer;
  editableName: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 31e2278... Improved +projects component to work with http backend
  http: Http;

  constructor(public projectsService: ProjectsService, http: Http) {
    this.http = http;
<<<<<<< HEAD
<<<<<<< HEAD
    projectsService.http = http;

    this.reloadProjectsService();
  }

  reloadProjectsService() {
    this.projectsService.reloadData();
  }
=======
  constructor(public nameListService: NameListService) {}
>>>>>>> 1afbd74... Added basic components for projects, todos, users
=======
    this.reloadNameListService();
=======
    projectsService.http = http;

    this.reloadProjectsService();
>>>>>>> d91181b... Improved projects component
  }

  reloadProjectsService() {
    this.projectsService.reloadData();
  }
>>>>>>> 31e2278... Improved +projects component to work with http backend

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    this.postRequest('http://localhost:8080/add-project', { name: this.newName }).subscribe((res:Response) => {
      this.reloadProjectsService();
    });

=======
    this.nameListService.add(this.newName);
>>>>>>> 1afbd74... Added basic components for projects, todos, users
=======
    let th = this;

=======
>>>>>>> d91181b... Improved projects component
    this.postRequest('http://localhost:8080/add-project', { name: this.newName }).subscribe((res:Response) => {
      this.reloadProjectsService();
    });

>>>>>>> 31e2278... Improved +projects component to work with http backend
    this.newName = '';
    return false;
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 31e2278... Improved +projects component to work with http backend
  editName(index: string): boolean {

    var item = this.projectsService.getById(index);

    if(item){
<<<<<<< HEAD
<<<<<<< HEAD
      this.isEditing = true;
      this.editableNameId = index;
      this.editableName = item.name;
    }
=======
  editName(index: integer): boolean {
    this.isEditing = true;
    this.editableNameId = index;
    this.editableName = this.nameListService.get()[index];
>>>>>>> 1afbd74... Added basic components for projects, todos, users
=======
        this.isEditing = true;
        this.editableNameId = index;
        this.editableName = item.name;
=======
      this.isEditing = true;
      this.editableNameId = index;
      this.editableName = item.name;
>>>>>>> 28173ce... Added tiny auth module
    }
>>>>>>> 31e2278... Improved +projects component to work with http backend

    return false;
  }

<<<<<<< HEAD
<<<<<<< HEAD
  updateName(index: string): boolean {
    this.isEditing = false;

    this.postRequest('http://localhost:8080/edit-project', { id: this.editableNameId, name: this.editableName }).subscribe((res:Response) => {
      this.reloadProjectsService()
    })

    return true;
  }

  postRequest(url: string, jsonData: object): object {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');

    return this.http.post(url, JSON.stringify(jsonData), { headers: headers });
  }

  deleteName(index: string): boolean {
    if(confirm('Are you sure you want to delete project ' + this.projectsService.getById(index).name + ' ?')){
      this.postRequest('http://localhost:8080/delete-project', { id: index }).subscribe((res:Response) => {
        this.reloadProjectsService();
      });
=======
  updateName(index: integer): boolean {
    this.nameListService.edit(this.editableNameId, this.editableName);
=======
  updateName(index: string): boolean {
>>>>>>> 31e2278... Improved +projects component to work with http backend
    this.isEditing = false;

    this.postRequest('http://localhost:8080/edit-project', { id: this.editableNameId, name: this.editableName }).subscribe((res:Response) => {
      this.reloadProjectsService()
    })

    return true;
  }

<<<<<<< HEAD
  deleteName(index: integer): boolean {
    if(confirm('Are you sure you want to delete project ' + this.nameListService.get()[index] + ' ?')){
      this.nameListService.delete(index);
>>>>>>> 1afbd74... Added basic components for projects, todos, users
=======
  postRequest(url: string, jsonData: object): object {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');

    return this.http.post(url, JSON.stringify(jsonData), { headers: headers });
  }

  deleteName(index: string): boolean {
    if(confirm('Are you sure you want to delete project ' + this.projectsService.getById(index).name + ' ?')){
<<<<<<< HEAD
        this.postRequest('http://localhost:8080/delete-project', { id: index }).subscribe((res:Response) => {
          this.reloadProjectsService();
        });
>>>>>>> 31e2278... Improved +projects component to work with http backend
=======
      this.postRequest('http://localhost:8080/delete-project', { id: index }).subscribe((res:Response) => {
        this.reloadProjectsService();
      });
>>>>>>> 28173ce... Added tiny auth module
    }

    return true;
  }
}
