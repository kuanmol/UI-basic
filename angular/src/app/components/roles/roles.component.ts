import {HttpClient} from '@angular/common/http';
import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ApiResponseModel, IRole} from '../../model/interface/role';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, NgForOf],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  roleList: IRole [] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles()
  }

  getAllRoles(): void {
    this.http.get<ApiResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: ApiResponseModel) => {
      this.roleList = res.data;
    })
  }


  // firstName: string = "Anmol Kumar";
  // angularVersion = "Version 18";
  // version: number = 18;
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = "button ";
  // selectedState: string = " ";
  //
  // showWelcomeAlert() {
  //   alert("Welcome to the Vue.js App");
  // }
  //
  // showMessage(message: string) {
  //   alert(message);
  // }

}
