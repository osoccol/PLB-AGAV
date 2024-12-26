import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

function loadModule() {
  console.log('Module user chargé !');
}

loadModule();

@NgModule({
  declarations: [],
  imports: [
    CommonModule, UserComponent
  ],
  exports: [UserComponent]
})
export class UserModule { }
