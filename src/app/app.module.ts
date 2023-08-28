import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';
import { PhotoFrameComponent } from './shared/components/photo-frame/photo-frame.component';
import { PhotoFrameModule } from './shared/components/photo-frame/photo-frame.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LikeWidgetModule,
    PhotoFrameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
