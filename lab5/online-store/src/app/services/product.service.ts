import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    { id: 1, name: 'iPhone 15 Pro', description: 'An ultra-durable smartphone made of titanium', price: 650000, rating: 5.0, image: '', images: [], link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-sinii-113138222/', likes: 0, categoryId: 1 },
    { id: 2, name: 'Samsung Galaxy S24 FE', description: 'A smartphone that combines a powerful processor', price: 500000, rating: 4.9, image: '', images: [], link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-chernyi-128143468/', likes: 0, categoryId: 1 },
    { id: 3, name: 'Sony Xperia 1 VII', description: 'A premium flagship Android smartphone', price: 789900, rating: 4.8, image: '', images: [], link: 'https://kaspi.kz/shop/p/sony-xperia-1-vii-12-gb-256-gb-chernyi-141356642/', likes: 0, categoryId: 1 },
    { id: 4, name: 'Xiaomi Redmi Note 14', description: 'A powerful and stylish smartphone with a large memory capacity', price: 141081, rating: 5.0, image: '', images: [], link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-8-gb-256-gb-chernyi-133574875/', likes: 0, categoryId: 1 },
    { id: 5, name: 'Google Pixel 8a', description: 'A powerful and stylish smartphone with a powerful processor', price: 249900, rating: 4.9, image: '', images: [], link: 'https://kaspi.kz/shop/p/google-pixel-8a-8-gb-128-gb-goluboi-119369122/?c=750000000', likes: 0, categoryId: 1 },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(id: number): Product[] {
    return this.products.filter(p => p.categoryId === id);
  }
}
