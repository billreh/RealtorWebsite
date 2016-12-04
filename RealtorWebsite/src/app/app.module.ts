import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {routing} from './app.routes';
import { ListingsComponent } from './listings/listings.component';
import { MyListingsComponent } from './listings/my-listings.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import {PanelModule, InputTextModule, ButtonModule, InputTextareaModule,
        DataGridModule, DataListModule} from 'primeng/primeng';
import {ListingService} from './listings/listing.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    MyListingsComponent,
    ListingDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
    PanelModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    DataGridModule,
    DataListModule
  ],
  providers: [ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
