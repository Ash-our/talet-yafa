import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {
  isArabic = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.isArabic$.subscribe(lang => this.isArabic = lang);
    this.isArabic = this.languageService.getCurrentLanguage();
  }

  products: Product[] = [
    { name: 'Plain Cocktail',       nameAr: 'كوكتيل سادة',            image: 'URL1', price: 14, ingredients: ['Mixed Fruits'],    ingredientsAr: ['فواكه مشكلة'] },
    { name: 'Banana & Milk',        nameAr: 'كوكتيل موز وحليب',      image: 'URL2', price: 12, ingredients: ['Banana','Milk'],   ingredientsAr: ['موز','حليب'] },
    { name: 'Banana & Strawberry',  nameAr: 'كوكتيل موز وفراولة',   image: 'URL3', price: 12, ingredients: ['Banana','Strawberry'], ingredientsAr: ['موز','فراولة'] },
    { name: 'Nut Cocktail',         nameAr: 'كوكتيل مكسرات',        image: 'URL4', price: 15, ingredients: ['Mixed Nuts'],      ingredientsAr: ['مكسرات'] },
    { name: 'Avocado Cocktail',     nameAr: 'كوكتيل افوكادو',       image: 'URL5', price: 20, ingredients: ['Avocado'],         ingredientsAr: ['افوكادو'] },
    { name: 'Talat Yafa Cocktail',  nameAr: 'كوكتيل طلة يافا',      image: 'URL6', price: 18, ingredients: ['Signature Mix'],   ingredientsAr: ['مزيج خاص'] },
  ];
}
