import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hot-drinks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hot-drinks.component.html',
  styleUrls: ['./hot-drinks.component.css']
})
export class HotDrinksComponent implements OnInit {
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
    name: 'Coffee',
    nameAr: 'قهوة',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
    price: 6,
    ingredients: ['Coffee beans', 'Water'],
    ingredientsAr: ['حبوب القهوة', 'ماء']
  },
  {
    name: 'Double Coffee',
    nameAr: 'قهوة دبل',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Double_espresso_shot.jpg',
    price: 10,
    ingredients: ['Double espresso', 'Water'],
    ingredientsAr: ['إسبريسو مضاعف', 'ماء']
  },
  {
    name: 'Espresso',
    nameAr: 'اسبرسو',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Espresso_Brewing.jpg',
    price: 6,
    ingredients: ['Espresso'],
    ingredientsAr: ['إسبريسو']
  },
  {
    name: 'Double Espresso',
    nameAr: 'اسبرسو دبل',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Espresso_double.jpg',
    price: 10,
    ingredients: ['Double espresso'],
    ingredientsAr: ['إسبريسو دبل']
  },
  {
    name: 'NESCAFÉ Coffee mate',
    nameAr: 'نسكافيه كوفي ميت',
    image: 'https://m.media-amazon.com/images/I/61eA6p9RYUL._AC_UF894,1000_QL80_.jpg',
    price: 8,
    ingredients: ['Nescafé', 'Coffee mate'],
    ingredientsAr: ['نسكافيه', 'كوفي ميت']
  },
  {
    name: 'NESCAFÉ',
    nameAr: 'نسكافيه',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Nescafe_classic.jpg',
    price: 10,
    ingredients: ['Nescafé'],
    ingredientsAr: ['نسكافيه']
  },
  {
    name: 'Cappuccino',
    nameAr: 'كابوتشينو',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Cappuccino_in_original.jpg',
    price: 12,
    ingredients: ['Espresso', 'Milk foam'],
    ingredientsAr: ['إسبريسو', 'رغوة حليب']
  },
  {
    name: 'Café Latte',
    nameAr: 'كافيه لاتيه',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Caffe_Latte_Bordighera_2006.jpg',
    price: 12,
    ingredients: ['Espresso', 'Steamed milk'],
    ingredientsAr: ['إسبريسو', 'حليب مبخر']
  },
  {
    name: 'Affogato',
    nameAr: 'افغاتو',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Affogato.jpg',
    price: 10,
    ingredients: ['Espresso', 'Ice cream'],
    ingredientsAr: ['إسبريسو', 'آيس كريم']
  },
  {
    name: 'French Vanilla',
    nameAr: 'فرنش فانيلا',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Vanilla_latte_and_cookie.jpg',
    price: 14,
    ingredients: ['Vanilla', 'Milk'],
    ingredientsAr: ['فانيلا', 'حليب']
  },
  {
    name: 'Sahlab',
    nameAr: 'سحلب',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Sahlab_drink.jpg',
    price: 12,
    ingredients: ['Sahlab mix', 'Milk'],
    ingredientsAr: ['مسحوق السحلب', 'حليب']
  },
  {
    name: 'Americano',
    nameAr: 'امريكانو',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Americano_coffee.jpg',
    price: 8,
    ingredients: ['Espresso', 'Hot water'],
    ingredientsAr: ['إسبريسو', 'ماء ساخن']
  },
  {
    name: 'Hot Chocolate',
    nameAr: 'هوت شوكليت',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Hot_chocolate.jpg',
    price: 12,
    ingredients: ['Cocoa', 'Milk'],
    ingredientsAr: ['كاكاو', 'حليب']
  },
  {
    name: 'Hot Chocolate Pudding',
    nameAr: 'هوت شوكليت بودينج',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Mug_chocolate_pudding.jpg',
    price: 14,
    ingredients: ['Chocolate', 'Cream'],
    ingredientsAr: ['شوكولاتة', 'كريمة']
  },
  {
    name: 'Hot Lotus',
    nameAr: 'هوت لوتس',
    image: 'https://i.pinimg.com/originals/6e/59/e2/6e59e2666297d3fd528a7f0f185c214f.jpg',
    price: 12,
    ingredients: ['Lotus spread', 'Milk'],
    ingredientsAr: ['لوتس', 'حليب']
  },
  {
    name: 'Hot Hazelnut',
    nameAr: 'هوت بندق',
    image: 'https://www.foodandwine.com/thmb/wXc3Y7ovFVDfvdQvHMSXMZDEO70=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mocha-latte-FT-RECIPE0623-1c3aaf3e4ae744df943a7a7ef2b65db0.jpg',
    price: 12,
    ingredients: ['Hazelnut syrup', 'Milk'],
    ingredientsAr: ['بندق', 'حليب']
  },
  {
    name: 'Hot Caramel',
    nameAr: 'هوت كاراميل',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Caramel_milk_coffee.jpg',
    price: 12,
    ingredients: ['Caramel', 'Milk'],
    ingredientsAr: ['كراميل', 'حليب']
  },
  {
    name: 'Tea',
    nameAr: 'شاي',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Black_tea_cup.jpg',
    price: 6,
    ingredients: ['Black tea', 'Hot water'],
    ingredientsAr: ['شاي أسود', 'ماء ساخن']
  },
  {
    name: 'Chamomile',
    nameAr: 'بابونج',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Camomile_tea_in_white_cup.jpg',
    price: 6,
    ingredients: ['Chamomile'],
    ingredientsAr: ['بابونج']
  },
  {
    name: 'Zhourat',
    nameAr: 'زهورات',
    image: 'https://cdn.salla.sa/EFBLb/7ZATm4puhIhS5bg4htXU1kxqjEdE1ny1shcmC9St.jpg',
    price: 6,
    ingredients: ['Herbal mix'],
    ingredientsAr: ['خلطة أعشاب']
  },
  {
    name: 'Spanish Latte',
    nameAr: 'سبانيش لاتيه',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Spanish_Latte.jpg',
    price: 14,
    ingredients: ['Espresso', 'Condensed milk'],
    ingredientsAr: ['إسبريسو', 'حليب مكثف']
  },
  {
    name: 'Chai Latte',
    nameAr: 'شاي لاتيه',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Chai_Latte_at_Machine_Guns_Vegas.jpg',
    price: 12,
    ingredients: ['Spiced tea', 'Steamed milk'],
    ingredientsAr: ['شاي بالتوابل', 'حليب مبخر']
  }
];


}
