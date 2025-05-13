import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-milkshakes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './milkshakes.component.html',
  styleUrls: ['./milkshakes.component.css']
})
export class MilkshakesComponent implements OnInit {
  isArabic = false;
  
  constructor(private languageService: LanguageService) {}
  
  ngOnInit() {
    // Subscribe to language changes
    this.languageService.isArabic$.subscribe(isArabic => {
      this.isArabic = isArabic;
    });
    
    // Initialize with current language
    this.isArabic = this.languageService.getCurrentLanguage();
  }
  products: Product[] = [
    {
      name: 'Vanilla Milkshake',
      nameAr: 'ميلك شيك فانيلا',
      image: 'assets/images/vanilla.jpg',
      price: 14,
      ingredients: ['Vanilla ice cream', 'Milk', 'Sugar'],
      ingredientsAr: ['آيس كريم فانيلا', 'حليب', 'سكر']
    },
    {
      name: 'Chocolate Milkshake',
      nameAr: 'ميلك شيك شوكولاتة',
      image: 'assets/images/chocolate.jpg',
      price: 15,
      ingredients: ['Chocolate ice cream', 'Milk', 'Chocolate syrup'],
      ingredientsAr: ['آيس كريم شوكولاتة', 'حليب', 'شراب شوكولاتة']
    },
    {
      name: 'Lotus Milkshake',
      nameAr: 'ميلك شيك لوتس',
      image: 'assets/images/lotus.jpg',
      price: 16,
      ingredients: ['Lotus biscuits', 'Ice cream', 'Milk'],
      ingredientsAr: ['بسكويت لوتس', 'آيس كريم', 'حليب']
    },
    {
      name: 'Oreo Milkshake',
      nameAr: 'ميلك شيك أوريو',
      image: 'assets/images/oreo.jpg',
      price: 17,
      ingredients: ['Oreo', 'Milk', 'Ice cream'],
      ingredientsAr: ['أوريو', 'حليب', 'آيس كريم']
    }
  ];
}
