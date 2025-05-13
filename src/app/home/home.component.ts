import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="hero-banner text-white">
      <div class="overlay d-flex align-items-center justify-content-center text-center">
        <div>
          <h1 class="display-4 fw-bold">{{ isArabic ? 'مرحباً بكم في طلة يافا' : 'Welcome to Talat Yafa' }}</h1>
          <p class="lead">{{ isArabic ? 'نكهات أصيلة، أجواء دافئة' : 'Authentic flavors, warm vibes.' }}</p>
          <!-- Explore Menu Navigation -->
          <div class="explore-menu mt-5">
            <h4 class="mb-4">{{ isArabic ? 'اكتشف نكهاتنا الرائعة' : 'Explore Our Menu' }}</h4>
            <div class="category-links">
              <a routerLink="/hot-drinks" class="category-link">
                <div class="icon-container">
                  <i class="fas fa-mug-saucer fa-bounce"></i>
                </div>
                <span>{{ isArabic ? 'مشروبات ساخنة' : 'Hot Drinks' }}</span>
              </a>
              <a routerLink="/cold-drinks" class="category-link">
                <div class="icon-container">
                  <i class="fas fa-cube fa-flip"></i>
                </div>
                <span>{{ isArabic ? 'مشروبات باردة' : 'Cold Drinks' }}</span>
              </a>
              <a routerLink="/milkshakes" class="category-link">
                <div class="icon-container">
                  <i class="fas fa-blender fa-shake"></i>
                </div>
                <span>{{ isArabic ? 'ميلك شيك' : 'Milkshakes' }}</span>
              </a>
              <a routerLink="/frappuccino" class="category-link">
                <div class="icon-container">
                  <i class="fas fa-mug-hot fa-beat"></i>
                </div>
                <span>{{ isArabic ? 'فرابتشينو' : 'Frappuccino' }}</span>
              </a>
              <a routerLink="/natural-Juices" class="category-link">
                <div class="icon-container">
                  <i class="fas fa-apple-whole fa-beat-fade"></i>
                </div>
                <span>{{ isArabic ? 'عصائر طبيعية' : 'Natural Juices' }}</span>
              </a>
              <a routerLink="/cocktail" class="category-link">
                <div class="icon-container">
                  <i class="fas fa-champagne-glasses fa-flip"></i>
                </div>
                <span>{{ isArabic ? 'كوكتيل' : 'Cocktail' }}</span>
              </a>
              <a routerLink="/mojito" class="category-link">
                <div class="icon-container">
                  <i class="fa-solid fa-martini-glass"></i>
                </div>
                <span>{{ isArabic ? 'موهيتو' : 'Mojito' }}</span>
              </a>
              <a routerLink="/ices" class="category-link">
                <div class="icon-container">
                  <i class="fas fa-snowflake fa-pulse"></i>
                </div>
                <span>{{ isArabic ? 'ايسات' : 'Ices' }}</span>
              </a>
              <a routerLink="/dessert" class="category-link">
                <div class="icon-container">
                  <i class="fas fa-cookie-bite fa-bounce"></i>
                </div>
                <span>{{ isArabic ? 'حلويات' : 'Dessert' }}</span>
              </a>
              <a routerLink="/hookah" class="category-link">
                <div class="icon-container">
                  <i class="fas fa-wind fa-fade"></i>
                </div>
                <span>{{ isArabic ? 'أرجيلة' : 'Hookah' }}</span>
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
  
  constructor(private languageService: LanguageService) {}
  
  ngOnInit() {
    // Subscribe to language changes
    this.languageService.isArabic$.subscribe(isArabic => {
      this.isArabic = isArabic;
    });
    
    // Initialize with current language
    this.isArabic = this.languageService.getCurrentLanguage();
  }
}
