import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
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
