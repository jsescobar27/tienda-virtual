import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { ProductoComponent } from './producto/producto.component';



@NgModule({
  declarations: [
    ProductoComponent
  ],
  imports: [
    MenuRoutingModule,
    CommonModule
  ]
})
export class MenuModule { }
