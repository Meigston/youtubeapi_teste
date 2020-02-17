import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DetailsComponent } from './details/details.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: [
    HomeComponent,
    DetailsComponent
  ]
})

export class PagesModule { }
