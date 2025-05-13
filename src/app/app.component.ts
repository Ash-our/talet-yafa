import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from './services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg sticky-top px-4" [ngClass]="{'navbar-dark': !isLightTheme, 'navbar-light bg-light': isLightTheme}">
      <div class="container">
        <a class="navbar-brand" routerLink="/">{{ isArabic ? 'طلة يافا' : 'Talat Yafa' }}</a>
        
      
        
        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item" *ngFor="let category of categories">
              <a class="nav-link d-flex flex-column align-items-center" 
                 [routerLink]="category.path" 
                 routerLinkActive="active">
                <i [class]="category.icon + ' category-icon'"></i>
                <span>{{ isArabic ? category.nameAr : category.name }}</span>
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Language Selector -->
        <div class="language-selector d-flex ms-auto">
          <button (click)="toggleLanguage()" class="btn btn-sm" [ngClass]="{'btn-outline-light': !isLightTheme, 'btn-outline-dark': isLightTheme}">
            {{ isArabic ? 'English' : 'عربي' }}
          </button>
        </div>
      </div>
    </nav>

    <!-- Category Navigation for Mobile -->
    <div class="category-nav-mobile" [dir]="isArabic ? 'rtl' : 'ltr'">
      <div class="container">
        <div class="scrollable-nav">
          <a *ngFor="let category of categories" 
             [routerLink]="category.path" 
             routerLinkActive="active" 
             class="category-item">
            <i [class]="category.icon"></i>
            <span>{{ isArabic ? category.nameAr : category.name }}</span>
          </a>
        </div>
      </div>
    </div>

    <main [dir]="isArabic ? 'rtl' : 'ltr'" [ngClass]="{'arabic-font': isArabic}">
      <router-outlet></router-outlet>
    </main>

    <footer class="bg-dark text-white py-4" [dir]="isArabic ? 'rtl' : 'ltr'">
      <div class="container text-center">
        <p class="mb-0">{{ isArabic ? '© 2025 طلعة يافا. جميع الحقوق محفوظة.' : '© 2025 Talat Yafa. All rights reserved.' }}</p>
      </div>
    </footer>
  `,
  styles: [`
    :root {
      --primary-color: #ff6b6b;
      --primary-color-rgb: 255, 107, 107;
      --secondary-color: #4ecdc4;
      --text-color: #212529;
      --card-bg: #ffffff;
    }

    /* Navbar Styles */
    .navbar {
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      background-color: var(--secondary-color);
    }
    
    .navbar-brand {
      font-weight: bold;
      font-size: 1.5rem;
    }
    
    .nav-link {
      font-size: 0.9rem;
      margin: 0 0.5rem;
      transition: all 0.3s ease;
      text-align: center;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
    }
    
    .nav-link:hover {
      color: var(--primary-color) !important;
      transform: translateY(-2px);
    }
    
    .nav-link.active {
      color: var(--primary-color) !important;
      font-weight: bold;
      background-color: rgba(var(--primary-color-rgb), 0.1);
    }
    
    .category-icon {
      font-size: 1.5rem;
      margin-bottom: 0.25rem;
      display: block;
    }
    
    /* Mobile Category Navigation */
    .category-nav-mobile {
      display: none;
      background-color: rgba(var(--primary-color-rgb), 0.05);
      padding: 10px 0;
      position: sticky;
      top: 56px;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    
    .scrollable-nav {
      display: flex;
      overflow-x: auto;
      padding: 5px 0;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none; /* Firefox */
    }
    
    .scrollable-nav::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Edge */
    }
    
    .category-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 8px 15px;
      min-width: 80px;
      text-decoration: none;
      color: var(--text-color);
      font-size: 0.8rem;
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    
    .category-item i {
      font-size: 1.2rem;
      margin-bottom: 5px;
    }
    
    .category-item.active {
      background-color: rgba(var(--primary-color-rgb), 0.1);
      color: var(--primary-color);
      font-weight: bold;
    }
    
    .category-item:hover {
      transform: translateY(-2px);
      color: var(--primary-color);
    }

    /* Language Selector */
    .language-selector {
      margin-right: 1rem;
      z-index: 1050;
      position: relative;
    }

    /* Main Content */
    main {
      min-height: calc(100vh - 160px);
      padding-bottom: 20px;
    }



    /* RTL Support */
    [dir="rtl"] .ms-auto {
      margin-right: auto !important;
      margin-left: 0 !important;
    }

    /* Arabic Font Support */
    .arabic-font {
      font-family: 'Tajawal', 'Poppins', sans-serif;
    }



    @media (min-width: 992px) {
      main {
        padding-bottom: 0; /* No padding needed on desktop */
      }
      .category-nav-mobile {
        display: none;
      }
    }
    
    @media (max-width: 991.98px) {
      .category-nav-mobile {
        display: block;
      }
      .navbar-nav {
        display: none;
      }
      main {
        padding-top: 10px;
      }
    }
  `]
})
export class AppComponent implements OnInit {
  isArabic = false;
  isLightTheme = false;
  categories = [
    { path: '/hot-drinks', name: 'Hot Drinks', nameAr: 'مشروبات ساخنة', icon: 'fas fa-mug-saucer fa-bounce' },
    { path: '/cold-drinks', name: 'Cold Drinks', nameAr: 'مشروبات باردة', icon: 'fas fa-cube fa-flip' },
    { path: '/milkshakes', name: 'Milkshakes', nameAr: 'ميلك شيك', icon: 'fas fa-blender fa-shake' },
    { path: '/frappuccino', name: 'Frappuccino', nameAr: 'فرابتشينو', icon: 'fas fa-mug-hot fa-beat' },
    { path: '/mojito', name: 'Mojito', nameAr: 'موهيتو', icon: 'fas fa-leaf fa-spin' },
    { path: '/natural-Juices', name: 'Natural Juices', nameAr: 'عصائر طبيعية', icon: 'fas fa-apple-whole fa-beat-fade' },
    { path: '/ices', name: 'Ices', nameAr: 'ايسات', icon: 'fas fa-snowflake fa-pulse' },
    { path: '/hookah', name: 'Hookah', nameAr: 'أرجيلة', icon: 'fas fa-wind fa-fade' },
    { path: '/cocktail', name: 'Cocktail', nameAr: 'كوكتيل', icon: 'fas fa-champagne-glasses fa-flip' },
    { path: '/dessert', name: 'Dessert', nameAr: 'حلويات', icon: 'fas fa-cookie-bite fa-bounce' }
  ];

  constructor(private languageService: LanguageService, private router: Router) {}

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.isArabic$.subscribe(isArabic => {
      this.isArabic = isArabic;
    });
    
    // Initialize with saved language preference
    this.isArabic = this.languageService.getCurrentLanguage();
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}
