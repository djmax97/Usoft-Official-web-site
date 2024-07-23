import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavigationComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
