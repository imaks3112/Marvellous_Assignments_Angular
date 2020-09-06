import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';


const routes: Routes = [
  {
    path:'batches',component:BatchesComponent
  },
  {
    path:'subjects',component:SubjectsComponent
  },
  {
    path:'',component:BatchesComponent
  },
  {
    path:'invalidpage',component:InvalidPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
