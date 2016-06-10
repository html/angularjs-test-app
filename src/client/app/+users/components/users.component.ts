import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

import {NameListService} from '../../shared/index';

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+users/components/users.component.html',
  styleUrls: ['app/+users/components/users.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class UsersComponent {
  isEditing: boolean;
  newName: string;
  editableNameId: integer;
  editableName: string;
  constructor(public nameListService: NameListService) {}

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }

  editName(index: integer): boolean {
    this.isEditing = true;
    this.editableNameId = index;
    this.editableName = this.nameListService.get()[index];

    return false;
  }

  updateName(index: integer): boolean {
    this.nameListService.edit(this.editableNameId, this.editableName);
    this.isEditing = false;

    return true;
  }

  deleteName(index: integer): boolean {
    if(confirm('Are you sure you want to delete project ' + this.nameListService.get()[index] + ' ?')){
      this.nameListService.delete(index);
    }

    return true;
  }
}
