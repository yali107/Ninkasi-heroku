import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { NinkasiComponent } from './ninkasi.component';
import { ContentBasedRecComponent } from './content-based-rec/content-based-rec.component';
import { CollabFilteringRecComponent } from './collab-filtering-rec/collab-filtering-rec.component';



const routes: Routes = [
  { path: 'cbrec', component: ContentBasedRecComponent },
  { path: 'cfrec', component: CollabFilteringRecComponent },
  { path: '**', redirectTo: 'cbrec' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NinkasiRoutingModule { }
