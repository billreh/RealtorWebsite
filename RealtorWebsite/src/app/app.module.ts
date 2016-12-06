import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {routing} from './app.routes';
import { ListingsComponent } from './listings/listings.component';
import { MyListingsComponent } from './listings/my-listings.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import {PanelModule, InputTextModule, ButtonModule, InputTextareaModule,
        DataGridModule, DataListModule, GrowlModule} from 'primeng/primeng';
import {ListingService} from './listings/listing.service';
import {ListingDetailService} from './listing-detail/listing-detail.service';
import {ListingDetailResolver} from './listing-detail/listing-detail-resolver';
import { CurrencyPipe } from './currency.pipe';
import {ListingDetailDto} from './listing-detail/listing-detail-dto';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    MyListingsComponent,
    ListingDetailComponent,
    CurrencyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    routing,
    PanelModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    DataGridModule,
    DataListModule,
    GrowlModule
  ],
  providers: [ListingService, ListingDetailService, ListingDetailResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
