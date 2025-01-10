import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './header/header.module';

@Component({
  imports: [RouterModule, HeaderModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = $localize `Mon Premier Monorepo !`;

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title)
  }
}
