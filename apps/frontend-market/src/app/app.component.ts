import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from './components/header/header.component';

@Component({
  imports: [RouterModule, Header],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  protected title = 'frontend-market';
}
