import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddPortfolioComponent } from './components/add-portfolio/add-portfolio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AddPortfolioComponent, DashboardComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [LoginComponent, RegisterComponent],
})
export class AuthModule {}
