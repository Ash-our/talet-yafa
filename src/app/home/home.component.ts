import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../services/language.service';
import { firebaseService } from '../services/restaurant.service';

interface Category {
  key: string;
  name: string;
  nameArabic: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="hero-banner text-white">
      <div class="overlay d-flex align-items-center justify-content-center text-center">
        <div>
          <h1 class="display-4 fw-bold">
            {{ isArabic ? 'مرحباً بكم في ' + (restaurant?.restArabicName || '') : 'Welcome to ' + (restaurant?.restName || '') }}
          </h1>
          <p class="lead">
            {{ isArabic ? (restaurant?.restArabicPhrase || '') : (restaurant?.restPhrase || '') }}
          </p>
          <!-- Explore Menu Navigation -->
          <div class="explore-menu mt-5">
            <h4 class="mb-4">{{ isArabic ? 'اكتشف نكهاتنا الرائعة' : 'Explore Our Menu' }}</h4>
            <div class="category-links">
              <a *ngFor="let cat of categories" [routerLink]="['/category', cat.key]" class="category-link">
                <div class="icon-container">
                  <i [class]="cat.icon"></i>
                </div>
                <span>{{ isArabic ? cat.nameArabic : cat.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero-banner {
      background-image: url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80');
      background-size: cover;
      background-position: center;
      height: 100vh;
      position: relative;
      overflow-y: auto;
    }

    .overlay {
      background-color: rgba(0, 0, 0, 0.6);
      height: 100%;
      width: 100%;
      padding: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    /* Category Navigation Styles */
    .explore-menu {
      margin-top: 2rem;
    }
    
    .category-links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .category-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: white;
      transition: all 0.3s ease;
      padding: 0.5rem;
      border-radius: 8px;
      width: 110px;
      text-align: center;
    }

    .category-link:hover {
      transform: translateY(-5px);
      background-color: rgba(255, 255, 255, 0.1);
    }

    .icon-container {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
    }

    .category-link:hover .icon-container {
      background-color: rgba(255, 107, 107, 0.8);
    }
    
    @media (max-width: 768px) {
      .category-links {
        gap: 0.75rem;
      }
      
      .category-link {
        width: 90px;
        font-size: 0.85rem;
      }
      
      .icon-container {
        height: 40px;
        width: 40px;
        font-size: 1.2rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  
  isArabic = false;
  restaurant: any = null;
  categories: Category[] = [];

  constructor(private languageService: LanguageService) {}

  async ngOnInit() {
    this.languageService.isArabic$.subscribe(lang => this.isArabic = lang);
    this.isArabic = this.languageService.getCurrentLanguage();
    const restaurants = await firebaseService.getAllRestaurants();
    if (restaurants) {
      const firstRestKey = Object.keys(restaurants)[0];
      this.restaurant = restaurants[firstRestKey];
      const categoriesObj = this.restaurant.menu?.categories || {};
      this.categories = Object.entries(categoriesObj).map(([key, value]: [string, any]) => ({
        key,
        name: value.name || '',
        nameArabic: value.nameArabic || '',
        icon: value.icon || 'fas fa-utensils',
      }));
    }
  }
}
