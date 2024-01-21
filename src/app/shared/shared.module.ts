import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonButtonComponent } from './components/common-button/common-button.component';

@NgModule({
  declarations: [],
  exports: [CommonButtonComponent],
  imports: [CommonModule, CommonButtonComponent],
})
export class SharedModule {}
