import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'personagens', pathMatch: 'full' },
  { path: 'personagens', loadChildren: () => import('./pages/personagens/personagens.module').then( m => m.PersonagensPageModule)},
  { path: 'detalhe-personagem', loadChildren: () => import('./pages/detalhe-personagem/detalhe-personagem.module').then( m => m.DetalhePersonagemPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
