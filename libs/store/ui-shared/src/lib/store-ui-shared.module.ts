import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class StoreUiSharedModule {}
