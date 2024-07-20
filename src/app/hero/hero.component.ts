import { Component } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  ngAfterViewInit(): void {
    $('.header-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      items: 1,
      dots: true,
      loop: true,
      nav: true,
      navText: [
        '<i class="bi bi-chevron-left text-white"></i>',
        '<i class="bi bi-chevron-right text-white"></i>'
      ]
    });
  }

}
