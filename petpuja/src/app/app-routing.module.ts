import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiffinprofileComponent } from './components/tiffinprofile/tiffinprofile.component';
import { TiffinproviderhomeComponent } from './components/tiffinproviderhome/tiffinproviderhome.component';
import { UpdateTiffinProviderComponent } from './components/update-tiffin-provider/update-tiffin-provider.component';

const routes: Routes = [
  {
    path:'tiffinproviderhome',
    component: TiffinproviderhomeComponent
  },
  {
    path:'tiffinproviderprofile',
    component:TiffinprofileComponent
  },
  {
    path:'edittiffinprovider',
    component : UpdateTiffinProviderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
