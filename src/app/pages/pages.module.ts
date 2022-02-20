import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProjectsComponent } from './projects/projects.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArrowComponent } from './components/arrow/arrow.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    AbilitiesComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    ArrowComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SweetAlert2Module.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    AboutComponent,
    HomeComponent,
    AbilitiesComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
})
export class PagesModule {}
