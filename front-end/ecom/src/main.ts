// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));



//tells that the ProductListComponent is the root componenet
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { ProductHomeComponent } from './app/product/product-home/product-home.component';

bootstrapApplication(ProductHomeComponent, {
  providers: [provideHttpClient()]
}).catch(err => console.error(err));


