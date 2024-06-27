import { Component, HostListener, ViewChild } from '@angular/core';
import { ScrollSpyDirective } from '../../directives/scroll-spy.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // @ViewChild(ScrollSpyDirective, {static: true}) scrollSpyDirective!: ScrollSpyDirective;
  activeSection: string = 'home';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 60) {
        currentSection = section.getAttribute('id')!;
      }
    });

    this.activeSection = currentSection;
  }
}
