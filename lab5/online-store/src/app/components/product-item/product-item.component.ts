import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  like() {
    this.product.likes++;
  }

  remove() {
    this.delete.emit(this.product.id);
  }

  share() {
    const url = `https://wa.me/?text=${encodeURIComponent(this.product.link)}`;
    window.open(url, '_blank');
  }

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }
}
