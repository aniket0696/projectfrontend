import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiffinproviderhomeComponent } from './components/tiffinproviderhome/tiffinproviderhome.component';
import { TiffinprofileComponent } from './components/tiffinprofile/tiffinprofile.component';
import { UpdateTiffinProviderComponent } from './components/update-tiffin-provider/update-tiffin-provider.component';

import { MatRippleModule } from '@angular/material/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';

import { TiffinMenuComponent } from './components/tiffin-menu/tiffin-menu.component';
import { TiffinPendingMenuComponent } from './components/tiffin-pending-menu/tiffin-pending-menu.component';
import { TiffinDeclainedMenuComponent } from './components/tiffin-declained-menu/tiffin-declained-menu.component';
import { DeregesterTiffinProviderComponent } from './components/deregester-tiffin-provider/deregester-tiffin-provider.component';
import { TiffinOrderHistoryComponent } from './components/tiffin-order-history/tiffin-order-history.component';
import { TiffinCurrentOrderComponent } from './components/tiffin-current-order/tiffin-current-order.component';
import { AddTiffinMenuComponent } from './components/add-tiffin-menu/add-tiffin-menu.component';
import { TiffinFeedbackComponent } from './components/tiffin-feedback/tiffin-feedback.component';



// Angular material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    TiffinproviderhomeComponent,
    TiffinprofileComponent,
    UpdateTiffinProviderComponent,
    TiffinMenuComponent,
    TiffinPendingMenuComponent,
    TiffinDeclainedMenuComponent,
    DeregesterTiffinProviderComponent,
    TiffinOrderHistoryComponent,
    TiffinCurrentOrderComponent,
    AddTiffinMenuComponent,
    TiffinFeedbackComponent
    
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    ReactiveFormsModule,
    
    MatCardModule,
    
    MatFormFieldModule,
    MatInputModule,
    
    MatDividerModule,
    MatSelectModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
