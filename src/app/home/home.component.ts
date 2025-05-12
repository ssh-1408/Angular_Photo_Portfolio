import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { SectionsComponent } from './sections/sections.component';
import { AchievementsComponent } from './achievements/achievements.component';


@Component({
  selector: 'app-home',
  imports: [RouterLink, HeroComponent, SectionsComponent, AchievementsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
