import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hookah',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hookah.component.html',
  styleUrls: ['./hookah.component.css']
})
export class HookahComponent implements OnInit {
  isArabic = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.isArabic$.subscribe(lang => this.isArabic = lang);
    this.isArabic = this.languageService.getCurrentLanguage();
  }

  products: Product[] = [
    { name: 'Apple ×2',              nameAr: 'ارجيلة تفاختين',          image: 'URL1',  price: 18, ingredients: ['Apple','Apple'],   ingredientsAr: ['تفاحتين'] },
    { name: 'Lemon & Mint',          nameAr: 'ارجيلة ليمون ونعنع',      image: 'URL2',  price: 18, ingredients: ['Lemon','Mint'],    ingredientsAr: ['ليمون','نعنع'] },
    { name: 'Watermelon & Mint',     nameAr: 'ارجيلة بطيخ ونعنع',      image: 'URL3',  price: 18, ingredients: ['Watermelon','Mint'], ingredientsAr: ['بطيخ','نعنع'] },
    { name: 'Kiwi',                  nameAr: 'ارجيلة كيف',             image: 'URL4',  price: 18, ingredients: ['Kiwi'],            ingredientsAr: ['كيف'] },
    { name: 'Blueberry',             nameAr: 'ارجيلة بلوبيري',         image: 'URL5',  price: 18, ingredients: ['Blueberry'],       ingredientsAr: ['بلوبيري'] },
    { name: 'Love66',                nameAr: 'ارجيلة لوف66',           image: 'URL6',  price: 18, ingredients: ['Blend 66'],        ingredientsAr: ['مزيج 66'] },
    { name: 'Arrow & Cinnamon',      nameAr: 'ارجيلة سهم وقرفة',       image: 'URL7',  price: 18, ingredients: ['Arrow','Cinnamon'], ingredientsAr: ['سهم','قرفة'] },
    { name: 'Talat Yafa Shisha',     nameAr: 'ارجيلة طلة يافا',        image: 'URL8',  price: 18, ingredients: ['Signature Mix'],   ingredientsAr: ['مزيج خاص'] },
    { name: 'Fresh',                 nameAr: 'ارجيلة فريش',            image: 'URL9',  price: 25, ingredients: ['Fresh Blend'],     ingredientsAr: ['خلطة فريش'] },
    { name: 'Head Refill',           nameAr: 'تجديد راس ارجيلة',       image: 'URL10', price: 8,  ingredients: ['Refill'],          ingredientsAr: ['تجديد راس'] },
    { name: 'Apple ×2—Nakhla',       nameAr: 'ارجيلة تفاحتين-نخلة',    image: 'URL11', price: 23, ingredients: ['Apple','Apple'],   ingredientsAr: ['تفاحتين'] },
  ];
}
