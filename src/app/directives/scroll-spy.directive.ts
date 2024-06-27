import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective {
  @Input() spyElements: string[] = [];

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let currentSection: string | null = null;

    this.spyElements.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          currentSection = id;
        }
      }
    });

    if (currentSection) {
      this.highlightNav(currentSection);
    }
  }

  private highlightNav(id: string) {
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.remove('active');
    });

    const activeNav = document.querySelector(`[href="#${id}"]`);
    if (activeNav) {
      activeNav.parentElement?.classList.add('active');
    }
  }
}
