import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Childrenn } from '../childrenn';
import { NgForm } from '@angular/forms';

export class User {
  constructor(
    public name: string,
    public email: string,
    public phone: string
  ) {}
}

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent {
  user: User[] = [];
  user_name = '';
  user_email = '';
  user_phone = '';

  @Output()
  onClicked = new EventEmitter<string>();

  addUser() {
    this.console_log();
    this.user.push(new User(this.user_name, this.user_email, this.user_phone));
    this.user_name = '';
  }

  onNameChange(): void {
    console.log('Что-то изменилось в поле ' + this.user_name);
  }

  console_log() {
    this.onClicked.emit(
      this.user_name + ' ' + this.user_email + '' + this.user_phone
    );
  }
}
