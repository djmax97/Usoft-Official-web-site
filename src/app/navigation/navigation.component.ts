import { Component, Input, input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Input() title:any="About Us"
}
