import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Store', component: StoreComponent },
  { path: 'ShoppingCart', component: ShoppingCartComponent },
  { path: 'MyAccount', component: MyAccountComponent },
  { path: 'ArticleDetails', component: ArticleDetailsComponent },
  { path: 'Checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
