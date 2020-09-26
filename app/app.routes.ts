import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CharactersComponent } from './characters/characters.component';
import { StatDescriptionsComponent } from './stat-descriptions/stat-descriptions.component';
import { AddStatLevelComponent } from './add-stat-level/add-stat-level.component';
import { EditStatLevelComponent } from './edit-stat-level/edit-stat-level.component';
import { NewCharacterComponent } from './new-character/new-character.component';
import { HomeComponent } from './home/home.component';
import { CharacterCompletionWarningComponent } from './character-completion-warning/character-completion-warning.component';
import { FeatLineComponent } from './feat-line/feat-line.component';
import { AddFeatLineComponent } from './add-feat-line/add-feat-line.component';
import { ShowFeatLineComponent } from './show-feat-line/show-feat-line.component';
import { AddFeatLineDescriptionComponent } from './add-feat-line-description/add-feat-line-description.component';
import { AddFeatLineStatRequirementComponent } from './add-feat-line-stat-requirement/add-feat-line-stat-requirement.component';
import { AddFeatLineFeatRequirementComponent } from './add-feat-line-feat-requirement/add-feat-line-feat-requirement.component';
import { AddFeatLineFreeFeatComponent } from './add-feat-line-free-feat/add-feat-line-free-feat.component';
import { AddFeatLineUnlockFeatComponent } from './add-feat-line-unlock-feat/add-feat-line-unlock-feat.component';
import { AddFeatActionComponent } from './add-feat-action/add-feat-action.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'characters',
        component: CharactersComponent
      },
      {
        path: 'stat-descriptions',
        component: StatDescriptionsComponent
      },
      {
        path: 'add-stat-level',
        component: AddStatLevelComponent
      },
      {
        path: 'edit-stat-level/:ID',
        component: EditStatLevelComponent
      },
      {
        path: 'new-character',
        component: NewCharacterComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'character-completion-warning',
        component: CharacterCompletionWarningComponent
      },
      {
        path: 'feat-line',
        component: FeatLineComponent
      },
      {
        path: 'add-feat-line',
        component: AddFeatLineComponent
      },
      {
        path: 'show-feat-line/:FeatID',
        component: ShowFeatLineComponent
      },
      {
        path: 'add-feat-line-description/:FeatID',
        component: AddFeatLineDescriptionComponent
      },
      {
        path: 'add-feat-line-stat-requirement/:FeatID',
        component: AddFeatLineStatRequirementComponent
      },
      {
        path: 'add-feat-line-feat-requirement/:FeatID',
        component: AddFeatLineFeatRequirementComponent
      },
      {
        path: 'add-feat-line-free-feat/:FeatID',
        component: AddFeatLineFreeFeatComponent
      },
      {
        path: 'add-feat-line-unlock-feat/:FeatID',
        component: AddFeatLineUnlockFeatComponent
      },
      {
        path: 'add-feat-action/:FeatID',
        component: AddFeatActionComponent
      },
    ]
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
