import { Routes } from '@angular/router';
import { HotDrinksComponent } from './categories/hot-drinks/hot-drinks.component';
import { MilkshakesComponent } from './categories/milkshakes/milkshakes.component';
import { HomeComponent } from './home/home.component';
import { IcesComponent } from './categories/ices/ices.component';
import { FrappuccinoComponent } from './categories/frappuccino/frappuccino.component';
import { MojitoComponent } from './categories/mojito/mojito.component';
import { NaturalJuicesComponent } from './categories/natural-juices/natural-juices.component';
import { HookahComponent } from './categories/hookah/hookah.component';
import { CocktailComponent } from './categories/cocktail/cocktail.component';
import { ColdDrinksComponent } from './categories/cold-drinks/cold-drinks.component';
import { DessertComponent } from './categories/dessert/dessert.component';

export const routes: Routes = [
  { path: 'hot-drinks', component: HotDrinksComponent },
  { path: 'milkshakes', component: MilkshakesComponent },
  {path:'ices',component:IcesComponent},
  {path:'frappuccino',component:FrappuccinoComponent},
  {path:'mojito',component:MojitoComponent},
  {path:'natural-Juices',component:NaturalJuicesComponent},
  {path:'hookah',component:HookahComponent},
  {path:'cocktail',component:CocktailComponent},
  {path:'cold-drinks',component:ColdDrinksComponent},
  {path:'dessert',component:DessertComponent},
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];  