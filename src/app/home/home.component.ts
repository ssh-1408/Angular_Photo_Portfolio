import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { SectionsComponent } from './sections/sections.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, HeroComponent, SectionsComponent, AchievementsComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
