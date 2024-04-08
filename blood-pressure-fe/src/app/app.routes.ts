import { Routes } from '@angular/router';
import { AddDataTemplateComponent } from './components/add-data-template/add-data-template.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { LastTenComponent } from './components/last-ten/last-ten.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddDataComponent },
  { path: 'add-template', component: AddDataTemplateComponent },
  { path: 'edit-template/:id', component: AddDataTemplateComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'last-ten', component: LastTenComponent },
];
