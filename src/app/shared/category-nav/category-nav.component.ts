import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-category-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div class="category-page-nav" [dir]="isArabic ? 'rtl' : 'ltr'">
      <div class="container">
        <div class="nav-container">
          <a *ngFor="let category of categories" 
             [routerLink]="category.path" 
             routerLinkActive="active" 
             class="category-nav-item">
            <i [class]="category.icon"></i>
            <span>{{ isArabic ? category.nameAr : category.name }}</span>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .category-page-nav {
      background-color: rgba(var(--primary-color-rgb), 0.05);
      padding: 15px 0;
      margin-bottom: 20px;
      border-radius: 10px;
    }
    
    .nav-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
    
    .category-nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 15px;
      min-width: 90px;
      text-decoration: none;
      color: var(--text-color);
      font-size: 0.9rem;
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    
    .category-nav-item i {
      font-size: 1.4rem;
      margin-bottom: 8px;
    }
    
    .category-nav-item.active {
      background-color: rgba(var(--primary-color-rgb), 0.1);
      color: var(--primary-color);
      font-weight: bold;
    }
    
    .category-nav-item:hover {
      transform: translateY(-2px);
      color: var(--primary-color);
      background-color: rgba(var(--primary-color-rgb), 0.05);
    }
    
    @media (max-width: 768px) {
      .category-nav-item {
        min-width: 70px;
        padding: 8px 10px;
        font-size: 0.8rem;
      }
      
      .category-nav-item i {
        font-size: 1.2rem;
      }
    }
  `]
})
export class CategoryNavComponent {
  isArabic = false;
  categories = [
    { path: '/hot-drinks', name: 'Hot Drinks', nameAr: 'مشروبات ساخنة', icon: 'fas fa-mug-saucer fa-bounce' },
    { path: '/cold-drinks', name: 'Cold Drinks', nameAr: 'مشروبات باردة', icon: 'fas fa-cube fa-flip' },
    { path: '/milkshakes', name: 'Milkshakes', nameAr: 'ميلك شيك', icon: 'fas fa-blender fa-shake' },
    { path: '/frappuccino', name: 'Frappuccino', nameAr: 'فرابتشينو', icon: 'fas fa-mug-hot fa-beat' },
    { path: '/mojito', name: 'Mojito', nameAr: 'موهيتو', icon: 'fa-solid fa-martini-glass' },
    { path: '/natural-Juices', name: 'Natural Juices', nameAr: 'عصائر طبيعية', icon: 'fas fa-apple-whole fa-beat-fade' },
    { path: '/ices', name: 'Ices', nameAr: 'ايسات', icon: 'fas fa-snowflake fa-pulse' },
    { path: '/hookah', name: 'Hookah', nameAr: 'أرجيلة', icon: 'fas fa-wind fa-fade' },
    { path: '/cocktail', name: 'Cocktail', nameAr: 'كوكتيل', icon: 'fas fa-champagne-glasses fa-flip' },
    { path: '/dessert', name: 'Dessert', nameAr: 'حلويات', icon: 'fas fa-cookie-bite fa-bounce' }
  ];

  constructor(private languageService: LanguageService) {
    // Subscribe to language changes
    this.languageService.isArabic$.subscribe(isArabic => {
      this.isArabic = isArabic;
    });
    
    // Initialize with saved language preference
    this.isArabic = this.languageService.getCurrentLanguage();
  }
}
