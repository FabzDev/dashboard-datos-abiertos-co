import { Component } from '@angular/core';
import { SidemenuComponent } from '../../shared/sidemenu/sidemenu.component';
import NewGoogleMapComponent from '../../components/new-google-map/new-google-map.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidemenuComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
