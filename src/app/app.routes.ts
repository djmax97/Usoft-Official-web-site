import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        data: {
          title: "Dayan"
        }
      },    
      {
        path: 'about/:active',
        component: AboutComponent,
        data: {
          title: "Dayan"
        }
      },
      {
        path: 'services/:active',
        component: ServicesComponent,
        data: {
          title: "Dayan"
        }
      }
];
