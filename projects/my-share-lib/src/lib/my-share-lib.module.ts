import { NgModule } from '@angular/core';
import { MyShareLibComponent } from './my-share-lib.component';
import { WizardComponent } from './wizard/wizard.component';

@NgModule({
  imports: [
  ],
  declarations: [MyShareLibComponent, WizardComponent],
  exports: [MyShareLibComponent, WizardComponent]
})
export class MyShareLibModule { }
