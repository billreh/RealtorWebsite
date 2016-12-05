/**
 * New typescript file
 */
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListingsComponent} from './listings/listings.component';
import {MyListingsComponent} from './listings/my-listings.component';
import {ListingDetailComponent} from './listing-detail/listing-detail.component';
import {ListingDetailResolver} from './listing-detail/listing-detail-resolver';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/app-home', pathMatch: 'full' },
    { path: 'app-home', component: HomeComponent },
    { path: 'app-listings', component: ListingsComponent },
    { path: 'app-listing-detail/:id', component: ListingDetailComponent, resolve: { _listingDetail: ListingDetailResolver} },
    { path: 'app-my-listings', component: MyListingsComponent }
];
