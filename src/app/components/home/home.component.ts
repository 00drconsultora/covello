import { Component, OnInit } from '@angular/core';
import { BaseUrlService } from '../../services/base-url.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  baseUrl: string;

  constructor(private baseUrlService: BaseUrlService) {}

  ngOnInit(): void {
    this.baseUrl = this.baseUrlService.getBaseUrl();
  }
}
