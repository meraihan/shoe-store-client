import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderSubmittedComponent } from './components/order-submitted/order-submitted.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyAddressComponent } from './components/my-address/my-address.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Store', component: StoreComponent },
  { path: 'ShoppingCart', component: ShoppingCartComponent },
  { path: 'MyAccount', component: MyAccountComponent },
  { path: 'ArticleDetails', component: ArticleDetailsComponent },
  { path: 'Checkout', component: CheckoutComponent },
  { path: 'OrderSubmitted', component: OrderSubmittedComponent},
  { path: 'MyProfile', component: MyProfileComponent},
  { path: 'MyAddress', component: MyAddressComponent},
  { path: 'MyOrders', component: MyOrdersComponent},
  { path: 'AdminHome', component: AdminHomeComponent},
  { path: 'AddArticle', component: AddArticleComponent},
  { path: 'ArticleList', component: ArticleListComponent},
  { path: 'Student', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
