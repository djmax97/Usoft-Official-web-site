import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  ngAfterViewInit(): void {
    $(".testimonial-carousel").owlCarousel({
      autoplay: false,
      smartSpeed: 1000,
      center: true,
      dots: true,
      loop: true,
      nav: true,
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 2
          },
          992: {
              items: 3
          }
      }
  });
  }
}
