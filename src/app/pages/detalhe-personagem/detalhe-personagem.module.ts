import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalhePersonagemPage } from './detalhe-personagem.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhePersonagemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalhePersonagemPage]
})
export class DetalhePersonagemPageModule {}
