import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OtherPageComponent } from './pages/other-page/other-page.component';
import { HowToPageComponent } from './pages/how-to-page/how-to-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'other',
        component: OtherPageComponent
    },
    {
        path: 'how-to',
        component: HowToPageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
