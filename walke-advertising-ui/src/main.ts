import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http'; // ✅ Import HttpClientModule

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), // ✅ Enables animations
    provideHttpClient()  // ✅ Provides HttpClientModule
  ]
}).catch(err => console.error(err));
