import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CideBarComponent } from './cide-bar/cide-bar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    CideBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedCompModule { }
