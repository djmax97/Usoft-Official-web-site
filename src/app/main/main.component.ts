import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, HeroComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
