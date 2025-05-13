import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-frappuccino',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frappuccino.component.html',
  styleUrls: ['./frappuccino.component.css']
})
export class FrappuccinoComponent implements OnInit {
  isArabic = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.isArabic$.subscribe(isArabic => {
      this.isArabic = isArabic;
    });
    this.isArabic = this.languageService.getCurrentLanguage();
  }

  products: Product[] = [
    { name: 'Frappé Classic', nameAr: 'فرابيه كلاسيك', image: 'URL1', price: 15, ingredients: ['Milk', 'Ice'], ingredientsAr: ['حليب', 'ثلج'] },
    { name: 'Frappé Chocolate', nameAr: 'فرابيه شوكولاتة', image: 'URL2', price: 16, ingredients: ['Chocolate'], ingredientsAr: ['شوكولاتة'] },
    { name: 'Frappé Caramel', nameAr: 'فرابيه كاراميل', image: 'URL3', price: 16, ingredients: ['Caramel'], ingredientsAr: ['كراميل'] },
    { name: 'Frappuccino', nameAr: 'فراباتشينو', image: 'URL4', price: 18, ingredients: ['Coffee', 'Milk', 'Ice'], ingredientsAr: ['قهوة', 'حليب', 'ثلج'] },
  ];
}
