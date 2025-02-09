import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-display',
  templateUrl: './grid-display.component.html',
  styleUrl: './grid-display.component.css'
})
export class GridDisplayComponent {
  products = [
    {
      name: 'Chair',
      image: '../images/furniture/chair1.jpeg',
      ratingValue: 4,
      rating: Array(5),
      price: 1000,
      isLoved: false
    },
    {
      name: 'Chair and Table',
      image: '../images/furniture/chair2.jpeg',
      ratingValue: 3,
      rating: Array(5),
      price: 1200,
      isLoved: false
    },
    {
      name: 'Chair',
      image: '../images/furniture/chair2.jpeg',
      ratingValue: 4,
      rating: Array(5),
      price: 1200,
      isLoved: false
    },
    {
      name: 'Bed',
      image: '../images/furniture/chair3.jpeg',
      ratingValue: 4,
      rating: Array(5),
      price: 1200,
      isLoved: false
    }
  ];

  toggleLove(product: any) {
    product.isLoved = !product.isLoved;
  }
}
