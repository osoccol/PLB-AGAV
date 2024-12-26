import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

function loadModule() {
  console.log('Module admin chargé !');
}

loadModule();

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
