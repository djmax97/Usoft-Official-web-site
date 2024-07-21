import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavigationComponent, NgIf],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
title:string="Service"
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
