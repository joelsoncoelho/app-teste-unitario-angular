import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { ActionDirectiveModule } from '../directives/action/action.module';


@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ActionDirectiveModule
  ],
  exports: [
    LikeWidgetComponent
  ],
  providers: [UniqueIdService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LikeWidgetModule { }
