/**
 * New typescript file
 */
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListingsComponent} from './listings/listings.component';
import {MyListingsComponent} from './listings/my-listings.component';
import {ListingDetailComponent} from './listing-detail/listing-detail.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/app-home', pathMatch: 'full' },
    { path: 'app-home', component: HomeComponent },
    { path: 'app-listings', component: ListingsComponent },
    { path: 'app-listing-detail', component: ListingDetailComponent},
    { path: 'app-my-listings', component: MyListingsComponent }
];
