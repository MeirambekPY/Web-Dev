import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'An ultra-durable smartphone crafted from titanium. It runs on a powerful Apple A17 Pro processor and features advanced professional-grade optics',
      price: 650000,
      rating: 4.4,
      image: '',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-sinii-113138222/?c=750000000'
    },
    {
      id: 2,
      name: 'Sony Xperia 1 VII black',
      description: 'A premium flagship smarphone built for users who demand uncompromising performance, professional-grade imaging, and cinematic display quality in a refined minimalist design',
      price: 789900,
      rating: 4.8,
      image: '',
      images: [],
      link: 'https://kaspi.kz/shop/p/sony-xperia-1-vii-12-gb-256-gb-chernyi-141356642/?c=750000000'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24 FE Black Smartphone',
      description: 'A smartphone that combines a powerful Exynos 2400 processor, a vibrant 120Hz AMOLED display, and a sophisticated camera system',
      price: 590000,
      rating: 4.9,
      image: '',
      images: [],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-chernyi-128143468/?c=750000000'
    },
    {
      id: 4,
      name: 'Garmin MARQ Commander Gen 2 Carbon Edition Smartwatch (Black)',
      description: 'An ultra-durable smartphone crafted from titanium. It runs on a powerful Apple A17 Pro processor and features advanced professional-grade optics.',
      price: 1814990,
      rating: 5.0,
      image: '',
      images: [],
      link: 'https://kaspi.kz/shop/p/garmin-marq-commander-gen-2-carbon-edition-chernyi-114464404/?c=750000000'
    },
    {
      id: 5,
      name: 'Xiaomi Redmi Note 14 Black Smartphone',
      description: 'This is a powerful and stylish smartphone with impressive specifications and a large memory capacity for comfortable use',
      price: 135000,
      rating: 5.0,
      image: '',
      images: [],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-8-gb-256-gb-chernyi-133574875/?c=750000000'
    },
  ];
}
