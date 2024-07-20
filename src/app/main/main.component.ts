import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { AboutComponent } from "../about/about.component";
import { SomefactsComponent } from "../somefacts/somefacts.component";
import { ServicesComponent } from "../services/services.component";
import { FeatureComponent } from "../feature/feature.component";
import { QuoteComponent } from "../quote/quote.component";
import { TeamComponent } from "../team/team.component";
import { CommentsComponent } from "../comments/comments.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, AboutComponent, SomefactsComponent, ServicesComponent, FeatureComponent, QuoteComponent, TeamComponent, CommentsComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
