import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-dessert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {
  isArabic = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.isArabic$.subscribe(lang => this.isArabic = lang);
    this.isArabic = this.languageService.getCurrentLanguage();
  }

  products: Product[] = [
    { name: 'San Sebastián',        nameAr: 'سان سيباستيان',           image: 'URL1',  price: 22, ingredients: ['Cheesecake'],         ingredientsAr: ['تشيز كيك'] },
    { name: 'Soufflé',              nameAr: 'سوفليه',                   image: 'URL2',  price: 22, ingredients: ['Chocolate Soufflé'], ingredientsAr: ['سوفليه شوكولاتة'] },
    { name: 'Kinder Cheesecake',    nameAr: 'تشيز كيك كندر',            image: 'URL3',  price: 22, ingredients: ['Kinder'],            ingredientsAr: ['كندر'] },
    { name: 'Oreo Cheesecake',      nameAr: 'تشيز كيك اوريو',           image: 'URL4',  price: 22, ingredients: ['Oreo'],              ingredientsAr: ['اوريو'] },
    { name: 'Lotus Cheesecake',     nameAr: 'تشيز كيك لوتس',           image: 'URL5',  price: 22, ingredients: ['Lotus'],             ingredientsAr: ['لوتس'] },
    { name: 'Blueberry Cheesecake', nameAr: 'تشيز كيك بلوبيري',        image: 'URL6',  price: 22, ingredients: ['Blueberry'],        ingredientsAr: ['بلوبيري'] },
    { name: 'Chocolate Cheesecake', nameAr: 'تشيز كيك شوكولاتة',       image: 'URL7',  price: 22, ingredients: ['Chocolate'],        ingredientsAr: ['شوكولاتة'] },
    { name: 'Brownies',             nameAr: 'براونيز',                  image: 'URL8',  price: 22, ingredients: ['Chocolate Brownie'], ingredientsAr: ['براونيز'] },
    { name: 'Diet Vanilla Cookies', nameAr: 'كوكيز دايت فانيل',        image: 'URL9',  price: 5,  ingredients: ['Vanilla Cookies'],   ingredientsAr: ['كويكز فانيلا'] },
    { name: 'Cake Service',         nameAr: 'خدمة كيك',                image: 'URL10', price: 5,  ingredients: ['Cake Slices'],       ingredientsAr: ['شرائح كيك'] },
  ];
}
