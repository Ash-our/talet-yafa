import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { firebaseService } from '../../services/restaurant.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  isArabic = false;

  // Category data
  name: string = '';
  nameArabic: string = '';
  catPhrase: string = '';
  catArabicPhrase: string = '';
  icon: string = '';
  items: any[] = [];

  constructor(
    private languageService: LanguageService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.languageService.isArabic$.subscribe(lang => this.isArabic = lang);
    this.isArabic = this.languageService.getCurrentLanguage();

    this.route.paramMap.subscribe(async params => {
      const categoryKey = params.get('categoryKey');
      const restaurants = await firebaseService.getAllRestaurants();
      if (restaurants) {
        const firstRestKey = Object.keys(restaurants)[0];
        const restaurant = restaurants[firstRestKey];
        const categoriesObj = restaurant.menu?.categories || {};
        if (categoryKey && categoriesObj[categoryKey]) {
          const cat = categoriesObj[categoryKey];
          this.name = cat.name || '';
          this.nameArabic = cat.nameArabic || '';
          this.catPhrase = cat.catPhrase || '';
          this.catArabicPhrase = cat.catArabicPhrase || '';
          this.icon = cat.icon || 'fas fa-utensils';
          this.items = cat.items ? Object.values(cat.items) : [];
        }
      }
    });
  }
}