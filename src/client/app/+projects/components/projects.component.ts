import {Component} from '@angular/core';
import {Injectable, bind} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

import {ProjectsService} from '../../shared/index';
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http'; 

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+projects/components/projects.component.html',
  styleUrls: ['app/+projects/components/projects.component.css'],
  viewProviders: [HTTP_PROVIDERS],
  directives: [FORM_DIRECTIVES]
})

export class ProjectsComponent {
  isEditing: boolean;
  newName: string;
  editableNameId: integer;
  editableName: string;
  http: Http;

  constructor(public projectsService: ProjectsService, http: Http) {
    this.http = http;
    projectsService.http = http;

    this.reloadProjectsService();
  }

  reloadProjectsService() {
    this.projectsService.reloadData();
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.postRequest('http://localhost:8080/add-project', { name: this.newName }).subscribe((res:Response) => {
      this.reloadProjectsService();
    });

    this.newName = '';
    return false;
  }

  editName(index: string): boolean {

    var item = this.projectsService.getById(index);

    if(item){
      this.isEditing = true;
      this.editableNameId = index;
      this.editableName = item.name;
    }

    return false;
  }

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
    }

    return true;
  }
}
