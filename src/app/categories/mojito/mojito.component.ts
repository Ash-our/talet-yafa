import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-mojito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mojito.component.html',
  styleUrls: ['./mojito.component.css']
})
export class MojitoComponent implements OnInit {
  isArabic = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.isArabic$.subscribe(isArabic => {
      this.isArabic = isArabic;
    });
    this.isArabic = this.languageService.getCurrentLanguage();
  }

  products: Product[] = [
    { name: 'Classic Mojito', nameAr: 'موهيتو كلاسيك', image: 'URL1', price: 18, ingredients: ['Mint', 'Lime'], ingredientsAr: ['نعناع', 'ليمون'] },
    { name: 'Blueberry Mojito', nameAr: 'موهيتو بلوبيري', image: 'URL2', price: 18, ingredients: ['Blueberry'], ingredientsAr: ['بلوبيري'] },
    { name: 'Mixed Berry Mojito', nameAr: 'موهيتو مكس بيري', image: 'URL3', price: 18, ingredients: ['Berries'], ingredientsAr: ['توت مشكل'] },
    { name: 'Strawberry Mojito', nameAr: 'موهيتو فراولة', image: 'URL4', price: 18, ingredients: ['Strawberry'], ingredientsAr: ['فراولة'] },
    { name: 'Passion Fruit Mojito', nameAr: 'موهيتو باشن فروت', image: 'URL5', price: 18, ingredients: ['Passion fruit'], ingredientsAr: ['باشن فروت'] },
    { name: 'Blue Angel Mojito', nameAr: 'موهيتو بلواينجل', image: 'URL6', price: 18, ingredients: ['Blue mix'], ingredientsAr: ['مزيج أزرق'] },
    { name: 'Talat Yafa Mojito', nameAr: 'موهيتو طلة يافا', image: 'URL7', price: 20, ingredients: ['Signature mix'], ingredientsAr: ['مزيج خاص'] },
    { name: 'Mango Mojito', nameAr: 'موهيتو مانجا', image: 'URL8', price: 18, ingredients: ['Mango'], ingredientsAr: ['مانجا'] },
    { name: 'Kiwi Mojito', nameAr: 'موهيتو كيوي', image: 'URL9', price: 18, ingredients: ['Kiwi'], ingredientsAr: ['كيوي'] },
    { name: 'Pomegranate Mojito', nameAr: 'موهيتو رمان', image: 'URL10', price: 18, ingredients: ['Pomegranate'], ingredientsAr: ['رمان'] },
    { name: 'Watermelon Mojito', nameAr: 'موهيتو بطيخ', image: 'URL11', price: 18, ingredients: ['Watermelon'], ingredientsAr: ['بطيخ'] },
    { name: 'Peach Mojito', nameAr: 'موهيتو خوخ', image: 'URL12', price: 18, ingredients: ['Peach'], ingredientsAr: ['خوخ'] },
    { name: 'Cherry Mojito', nameAr: 'موهيتو كرز', image: 'URL13', price: 18, ingredients: ['Cherry'], ingredientsAr: ['كرز'] },
  ];
}
