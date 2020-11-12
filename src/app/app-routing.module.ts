import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'covid',
    loadChildren: () =>
      import('./pages/covid/covid.module').then((m) => m.CovidModule),
  },
  {
    path: 'friends',
    loadChildren: () =>
      import('./pages/friends/friends.module').then((m) => m.FriendsModule),
  },
  {
    path: 'saved',
    loadChildren: () =>
      import('./pages/saved/saved.module').then((m) => m.SavedModule),
  },
  {
    path: 'groups',
    loadChildren: () =>
      import('./pages/groups/groups.module').then((m) => m.GroupsModule),
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
