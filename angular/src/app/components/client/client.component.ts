import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {Client} from '../../model/class/client';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-client',
  imports: [
    NgForOf, FormsModule, NgForOf,
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  clientObj: Client=new Client();
  clientList: Client[]=[];
}
