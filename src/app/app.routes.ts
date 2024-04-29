import { Routes } from '@angular/router';
import path from 'node:path';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { SearchItemsComponent } from './search-items/search-items.component';

export const routes: Routes = [
    {path:'', redirectTo:'/login',pathMatch:'full'},
    {path: 'login', component:LoginComponent},
    {path: 'layout', component:LayoutComponent,
        children:[
            // {path:'', redirectTo:'/layout/home',pathMatch:'full'},
            {path: 'home', component:HomeComponent},
            {path: 'admin', component: AdminPortalComponent},
            {path: 'productList',component:ProductListComponent},
            {path: 'cart',component:CartComponent},
            {path: 'search',component:SearchItemsComponent},
            {path: 'adminPortal',component:AdminPortalComponent}
        ]
    },
    {path: '**', component:PagenotfoundComponent}
];
