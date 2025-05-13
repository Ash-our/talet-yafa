import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-natural-juices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './natural-juices.component.html',
  styleUrls: ['./natural-juices.component.css']
})
export class NaturalJuicesComponent implements OnInit {
  isArabic = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.isArabic$.subscribe(lang => this.isArabic = lang);
    this.isArabic = this.languageService.getCurrentLanguage();
  }

  products: Product[] = [
    { name: 'Orange',         nameAr: 'برتقال',         image: 'URL1', price: 12, ingredients: ['Orange'],        ingredientsAr: ['برتقال'] },
    { name: 'Lemon',          nameAr: 'ليمون',          image: 'URL2', price: 12, ingredients: ['Lemon'],         ingredientsAr: ['ليمون'] },
    { name: 'Lemon & Mint',   nameAr: 'ليمون ونعنع',   image: 'URL3', price: 14, ingredients: ['Lemon','Mint'], ingredientsAr: ['ليمون','نعنع'] },
    { name: 'Mango',          nameAr: 'مانجا',          image: 'URL4', price: 14, ingredients: ['Mango'],         ingredientsAr: ['مانجا'] },
    { name: 'Muspilura',      nameAr: 'مسفلورة',       image: 'URL5', price: 15, ingredients: ['Muspilura'],   ingredientsAr: ['مسفلورة'] },
    { name: 'Pineapple',      nameAr: 'اناناس',         image: 'URL6', price: 14, ingredients: ['Pineapple'],     ingredientsAr: ['اناناس'] },
    { name: 'Strawberry',     nameAr: 'فراولة',         image: 'URL7', price: 14, ingredients: ['Strawberry'],    ingredientsAr: ['فراولة'] },
    { name: 'Mixed Fruits',   nameAr: 'مكس فواكه',     image: 'URL8', price: 18, ingredients: ['Mixed Fruits'],  ingredientsAr: ['مكس فواكه'] },
    { name: 'Carrot Juice',   nameAr: 'عصير جزر',      image: 'URL9', price: 14, ingredients: ['Carrot'],        ingredientsAr: ['جزر'] },
    { name: 'Apple Juice',    nameAr: 'عصير تفاح',     image: 'URL10', price: 14, ingredients: ['Apple'],       ingredientsAr: ['تفاح'] },
  ];
}
