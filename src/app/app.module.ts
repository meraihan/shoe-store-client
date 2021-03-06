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
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular-6-social-login";




// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("692072137787-7k2labjkfj2uvbt47k4ootvj3iil6n61.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}




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
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
