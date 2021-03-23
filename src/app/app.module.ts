import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreComponent } from './components/store/store.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderSubmittedComponent } from './components/order-submitted/order-submitted.component';
import { MyAddressComponent } from './components/my-address/my-address.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { StudentComponent } from './components/student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    StoreComponent,
    ShoppingCartComponent,
    MyAccountComponent,
    MyProfileComponent,
    ArticleDetailsComponent,
    CheckoutComponent,
    OrderSubmittedComponent,
    MyAddressComponent,
    MyOrdersComponent,
    AdminHomeComponent,
    AddArticleComponent,
    ArticleListComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
