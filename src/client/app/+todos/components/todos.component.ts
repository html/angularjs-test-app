import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

<<<<<<< HEAD
import {ProjectsService} from '../../shared/index';
import {TodosService} from '../../shared/index';
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http'; 
=======
import {NameListService} from '../../shared/index';
>>>>>>> 1afbd74... Added basic components for projects, todos, users

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+todos/components/todos.component.html',
  styleUrls: ['app/+todos/components/todos.component.css'],
<<<<<<< HEAD
  viewProviders: [HTTP_PROVIDERS],
=======
>>>>>>> 1afbd74... Added basic components for projects, todos, users
  directives: [FORM_DIRECTIVES]
})
export class TodosComponent {
  isEditing: boolean;
  newName: string;
<<<<<<< HEAD
  newProjectId: string;
  editableTodoItem: object;

  constructor(public projectsService: ProjectsService, todosService: TodosService, public http: Http) {
    projectsService.http = http;
    projectsService.reloadData();

    todosService.http = http;
    todosService.reloadData();

    this.todosService = todosService;
  }
=======
  editableNameId: integer;
  editableName: string;
  constructor(public nameListService: NameListService) {}
>>>>>>> 1afbd74... Added basic components for projects, todos, users

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
<<<<<<< HEAD
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
=======
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }

  editName(index: integer): boolean {
    this.isEditing = true;
    this.editableNameId = index;
    this.editableName = this.nameListService.get()[index];
>>>>>>> 1afbd74... Added basic components for projects, todos, users

    return false;
  }

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
<<<<<<< HEAD

  postRequest(url: string, jsonData: object): object {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');

    return this.http.post(url, JSON.stringify(jsonData), { headers: headers });
  }
=======
>>>>>>> 1afbd74... Added basic components for projects, todos, users
}
