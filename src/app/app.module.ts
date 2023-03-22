// Modules (Angular)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Own modules
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

// Components
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

@NgModule({
  declarations: [AppComponent, ErrorPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
