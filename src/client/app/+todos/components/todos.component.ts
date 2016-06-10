import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

import {ProjectsService} from '../../shared/index';
import {TodosService} from '../../shared/index';
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http'; 

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+todos/components/todos.component.html',
  styleUrls: ['app/+todos/components/todos.component.css'],
  viewProviders: [HTTP_PROVIDERS],
  directives: [FORM_DIRECTIVES]
})
export class TodosComponent {
  isEditing: boolean;
  newName: string;
  newProjectId: string;
  editableTodoItem: object;

  constructor(public projectsService: ProjectsService, todosService: TodosService, public http: Http) {
    projectsService.http = http;
    projectsService.reloadData();

    todosService.http = http;
    todosService.reloadData();

    this.todosService = todosService;
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.postRequest('http://localhost:8080/add-todo-item', { name: this.newName, "projectId": this.newProjectId }).subscribe((res:Response) => {
      this.todosService.reloadData();
      this.projectsService.reloadData();
    });


    this.newName = '';
    this.newProjectId = '';

    return false;
  }

  editName(id: string): boolean {
    this.editableTodoItem = this.todosService.getById(id);

    if(!this.editableTodoItem){
        return;
    }

    this.isEditing = true;

    return false;
  }

  updateName(id: string): boolean {
    this.isEditing = false;

    this.postRequest('http://localhost:8080/edit-todo-item', this.editableTodoItem).subscribe((res:Response) => {
      this.todosService.reloadData()
      this.projectsService.reloadData()
    })

    return true;
  }

  deleteName(id: string): boolean {
    if(confirm('Are you sure you want to delete todo item ' + this.todosService.getById(id).name + ' ?')){
        this.postRequest('http://localhost:8080/delete-todo-item', { id: id }).subscribe((res:Response) => {
          this.todosService.reloadData();
          this.projectsService.reloadData();
        });
    }

    return true;
  }

  postRequest(url: string, jsonData: object): object {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');

    return this.http.post(url, JSON.stringify(jsonData), { headers: headers });
  }
}
