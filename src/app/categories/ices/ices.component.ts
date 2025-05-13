import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-ices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ices.component.html',
  styleUrls: ['./ices.component.css']
})
export class IcesComponent implements OnInit {
  isArabic = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.isArabic$.subscribe(isArabic => {
      this.isArabic = isArabic;
    });
    this.isArabic = this.languageService.getCurrentLanguage();
  }

  products: Product[] = [
    { name: 'Ice Vanilla', nameAr: 'ايس فانيل', image: 'URL1', price: 16, ingredients: ['Vanilla'], ingredientsAr: ['فانيلا'] },
    { name: 'Ice Coffee', nameAr: 'ايس كوفي', image: 'URL2', price: 16, ingredients: ['Coffee'], ingredientsAr: ['قهوة'] },
    { name: 'Ice Chocolate', nameAr: 'ايس شوكليت', image: 'URL3', price: 16, ingredients: ['Chocolate'], ingredientsAr: ['شوكولاتة'] },
    { name: 'Ice Caramel', nameAr: 'ايس كاراميل', image: 'URL4', price: 16, ingredients: ['Caramel'], ingredientsAr: ['كراميل'] },
    { name: 'Ice Latte', nameAr: 'ايس لاتيه', image: 'URL5', price: 16, ingredients: ['Latte'], ingredientsAr: ['لاتيه'] },
    { name: 'Peach Ice Tea', nameAr: 'ايس تي خوخ', image: 'URL6', price: 16, ingredients: ['Tea', 'Peach'], ingredientsAr: ['شاي', 'خوخ'] },
  ];
}
