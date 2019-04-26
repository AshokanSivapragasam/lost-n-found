import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationGuard, MsAdalAngular6Module, MsAdalAngular6Service } from 'microsoft-adal-angular6';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LostComponent } from './components/lost/lost.component';
import { FoundComponent } from './components/found/found.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { LayoutFooterComponent } from './components/layout-footer/layout-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LostComponent,
    FoundComponent,
    HomeComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsAdalAngular6Module.forRoot({
      tenant: 'happiestminds.onmicrosoft.com',
      clientId: 'dde72b01-e777-4033-8d1e-20b97cdd1f1b',
      redirectUri: 'http://localhost:4200',
      endpoints: {
        "https://login.microsoftonline.com/": "77428205-87ff-4048-a645-91b337240228"
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: 'localStorage',
    })
  ],
  providers: [AuthenticationGuard, MsAdalAngular6Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
