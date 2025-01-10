import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

function loadModule() {
  console.log('Module header chargé !');
}

loadModule();

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
