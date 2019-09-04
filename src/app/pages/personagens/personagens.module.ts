import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonagensPage } from './personagens.page';

import {MatListModule} from '@angular/material/list';

const routes: Routes = [
  {
    path: '',
    component: PersonagensPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatListModule
  ],
  declarations: [PersonagensPage]
})
export class PersonagensPageModule {}
