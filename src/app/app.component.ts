import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { LocationComponent } from './components/location/location.component';
import { TourComponent } from './components/tour/tour.component';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, ProjectComponent, AmenitiesComponent, LocationComponent, TourComponent, ContactFormComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-page-app';
}
