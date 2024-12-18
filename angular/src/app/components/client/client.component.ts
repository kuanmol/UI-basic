import {Component, inject, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {Client} from '../../model/class/client';
import {FormsModule} from '@angular/forms';
import {ClientService} from '../../service/client.service';
import {ApiResponseModel} from '../../model/interface/role';
import {iterator} from 'rxjs/internal/symbol/iterator';

@Component({
  selector: 'app-client',
  imports: [FormsModule,
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {


  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getAllClients().subscribe((res: ApiResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveClient() {
    this.clientService.addUpdate(this.clientObj).subscribe((res: ApiResponseModel) => {
      if (res.result) {
        alert("client saved successfully");
        this.loadClients();
        this.clientObj = new Client();
      } else {
        alert(res.message);
      }
    })
  }
}
