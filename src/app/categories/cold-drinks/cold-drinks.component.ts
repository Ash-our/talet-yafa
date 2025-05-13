import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-cold-drinks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cold-drinks.component.html',
  styleUrls: ['./cold-drinks.component.css']
})
export class ColdDrinksComponent implements OnInit {
  isArabic = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.isArabic$.subscribe(lang => this.isArabic = lang);
    this.isArabic = this.languageService.getCurrentLanguage();
  }

  products: Product[] = [
    { name: 'Large Water',      nameAr: 'مياه كبير',      image: 'URL1', price: 5,  ingredients: ['Water'],          ingredientsAr: ['ماء'] },
    { name: 'Small Water',      nameAr: 'مياه صغير',      image: 'URL2', price: 3,  ingredients: ['Water'],          ingredientsAr: ['ماء'] },
    { name: 'XL',               nameAr: 'XL',             image: 'URL3', price: 7,  ingredients: ['Ice & Fruit'],   ingredientsAr: ['ثلج وفواكه'] },
    { name: 'BLU',              nameAr: 'BLU',            image: 'URL4', price: 7,  ingredients: ['Blue Drink'],     ingredientsAr: ['مشروب أزرق'] },
    { name: 'BLU Day',          nameAr: 'BLU day',        image: 'URL5', price: 7,  ingredients: ['Blue Lemonade'], ingredientsAr: ['ليمونادة زرقاء'] },
    { name: 'Soda',             nameAr: 'صودا',           image: 'URL6', price: 5,  ingredients: ['Carbonated Water'], ingredientsAr: ['مياه غازية'] },
    { name: 'Cola',             nameAr: 'كولا',           image: 'URL7', price: 5,  ingredients: ['Cola Syrup'],      ingredientsAr: ['شراب كولا'] },
    { name: 'Apple Bavaria',    nameAr: 'بفاريا تفاح',    image: 'URL8', price: 7,  ingredients: ['Apple Beer'],     ingredientsAr: ['بيرة تفاح'] },
    { name: '7 BLU Mint',       nameAr: '7 BLU نعنع',     image: 'URL9', price: 7,  ingredients: ['Blue Soda','Mint'], ingredientsAr: ['مشروب أزرق','نعنع'] },
  ];
}
