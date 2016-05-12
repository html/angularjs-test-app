import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

<<<<<<< HEAD
<<<<<<< HEAD
import {ProjectsService} from '../../shared/index';
import {TodosService} from '../../shared/index';
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http'; 
=======
import {NameListService} from '../../shared/index';
>>>>>>> 1afbd74... Added basic components for projects, todos, users
=======
import {ProjectsService} from '../../shared/index';
import {TodosService} from '../../shared/index';
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http'; 
>>>>>>> 0c0a90e... Made todo item component work using backend

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+todos/components/todos.component.html',
  styleUrls: ['app/+todos/components/todos.component.css'],
<<<<<<< HEAD
<<<<<<< HEAD
  viewProviders: [HTTP_PROVIDERS],
=======
>>>>>>> 1afbd74... Added basic components for projects, todos, users
=======
  viewProviders: [HTTP_PROVIDERS],
>>>>>>> 0c0a90e... Made todo item component work using backend
  directives: [FORM_DIRECTIVES]
})
export class TodosComponent {
  isEditing: boolean;
  newName: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0c0a90e... Made todo item component work using backend
  newProjectId: string;
  editableTodoItem: object;

  constructor(public projectsService: ProjectsService, todosService: TodosService, public http: Http) {
    projectsService.http = http;
    projectsService.reloadData();

    todosService.http = http;
    todosService.reloadData();

    this.todosService = todosService;
  }
<<<<<<< HEAD
=======
  editableNameId: integer;
  editableName: string;
  constructor(public nameListService: NameListService) {}
>>>>>>> 1afbd74... Added basic components for projects, todos, users
=======
>>>>>>> 0c0a90e... Made todo item component work using backend

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0c0a90e... Made todo item component work using backend
    this.postRequest('http://localhost:8080/add-todo-item', { name: this.newName, "projectId": this.newProjectId }).subscribe((res:Response) => {
      this.todosService.reloadData();
      this.projectsService.reloadData();
    });


<<<<<<< HEAD
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
=======
    this.nameListService.add(this.newName);
=======
>>>>>>> 0c0a90e... Made todo item component work using backend
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
<<<<<<< HEAD
    this.editableNameId = index;
    this.editableName = this.nameListService.get()[index];
>>>>>>> 1afbd74... Added basic components for projects, todos, users
=======
>>>>>>> 0c0a90e... Made todo item component work using backend

    return false;
  }

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  updateName(index: integer): boolean {
    this.nameListService.edit(this.editableNameId, this.editableName);
=======
  updateName(id: string): boolean {
>>>>>>> 0c0a90e... Made todo item component work using backend
    this.isEditing = false;

    this.postRequest('http://localhost:8080/edit-todo-item', this.editableTodoItem).subscribe((res:Response) => {
      this.todosService.reloadData()
      this.projectsService.reloadData()
    })

    return true;
  }

<<<<<<< HEAD
  deleteName(index: integer): boolean {
    if(confirm('Are you sure you want to delete project ' + this.nameListService.get()[index] + ' ?')){
      this.nameListService.delete(index);
>>>>>>> 1afbd74... Added basic components for projects, todos, users
=======
  deleteName(id: string): boolean {
    if(confirm('Are you sure you want to delete todo item ' + this.todosService.getById(id).name + ' ?')){
        this.postRequest('http://localhost:8080/delete-todo-item', { id: id }).subscribe((res:Response) => {
          this.todosService.reloadData();
          this.projectsService.reloadData();
        });
>>>>>>> 0c0a90e... Made todo item component work using backend
    }

    return true;
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0c0a90e... Made todo item component work using backend

  postRequest(url: string, jsonData: object): object {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');

    return this.http.post(url, JSON.stringify(jsonData), { headers: headers });
  }
<<<<<<< HEAD
=======
>>>>>>> 1afbd74... Added basic components for projects, todos, users
=======
>>>>>>> 0c0a90e... Made todo item component work using backend
}
