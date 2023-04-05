import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Own modules
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule, MaterialModule],
})
export class AuthModule {}
