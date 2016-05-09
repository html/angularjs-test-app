import {Component} from '@angular/core';
<<<<<<< HEAD
import {Injectable, bind} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

import {ProjectsService} from '../../shared/index';
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http'; 
=======
import {FORM_DIRECTIVES} from '@angular/common';

import {NameListService} from '../../shared/index';
>>>>>>> 1afbd74... Added basic components for projects, todos, users

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+projects/components/projects.component.html',
  styleUrls: ['app/+projects/components/projects.component.css'],
<<<<<<< HEAD
  viewProviders: [HTTP_PROVIDERS],
  directives: [FORM_DIRECTIVES]
})

=======
  directives: [FORM_DIRECTIVES]
})
>>>>>>> 1afbd74... Added basic components for projects, todos, users
export class ProjectsComponent {
  isEditing: boolean;
  newName: string;
  editableNameId: integer;
  editableName: string;
<<<<<<< HEAD
  http: Http;

  constructor(public projectsService: ProjectsService, http: Http) {
    this.http = http;
    projectsService.http = http;

    this.reloadProjectsService();
  }

  reloadProjectsService() {
    this.projectsService.reloadData();
  }
=======
  constructor(public nameListService: NameListService) {}
>>>>>>> 1afbd74... Added basic components for projects, todos, users

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
<<<<<<< HEAD
    this.postRequest('http://localhost:8080/add-project', { name: this.newName }).subscribe((res:Response) => {
      this.reloadProjectsService();
    });

=======
    this.nameListService.add(this.newName);
>>>>>>> 1afbd74... Added basic components for projects, todos, users
    this.newName = '';
    return false;
  }

<<<<<<< HEAD
  editName(index: string): boolean {

    var item = this.projectsService.getById(index);

    if(item){
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

    return false;
  }

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
    this.isEditing = false;

    return true;
  }

  deleteName(index: integer): boolean {
    if(confirm('Are you sure you want to delete project ' + this.nameListService.get()[index] + ' ?')){
      this.nameListService.delete(index);
>>>>>>> 1afbd74... Added basic components for projects, todos, users
    }

    return true;
  }
}
