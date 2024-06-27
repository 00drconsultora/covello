import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSpyDirective } from '../directives/scroll-spy.directive';
import { AppComponent } from '../app.component';



@NgModule({
  imports: [
    CommonModule,
    ScrollSpyDirective,
    AppComponent
  ],
  exports: [ScrollSpyDirective]
})
export class AppModuleModule { }
