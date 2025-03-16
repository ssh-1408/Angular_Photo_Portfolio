import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';



@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('600ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('600ms ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]

})
export class TestimonialsComponent implements OnInit  {

  testimonials = [
    { text: "This service is amazing! It exceeded all my expectations.", author: "John Doe" },
    { text: "The best experience I've ever had. Highly recommended!", author: "Sarah Smith" },
    { text: "Truly outstanding customer support and quality!", author: "Alex Brown" }
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextTestimonial();
    }, 4000); // Auto-switch every 4 seconds
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  setTestimonial(index: number) {
    this.currentIndex = index;
  }

}
