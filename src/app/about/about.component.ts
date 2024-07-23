import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute } from '@angular/router';
import { NavigationComponent } from "../navigation/navigation.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf, HeaderComponent, NavigationComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  isActive: boolean = false
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      console.log(res.active)
      this.isActive=res.active=="active" ? true:false
    })
  }

}
