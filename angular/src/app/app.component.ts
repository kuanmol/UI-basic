import {Component} from '@angular/core';
import {MasterComponent} from './components/master/master.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MasterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
