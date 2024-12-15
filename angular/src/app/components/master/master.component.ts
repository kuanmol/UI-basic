import {Component} from '@angular/core';
import {DesignationComponent} from '../designation/designation.component';
import {RolesComponent} from '../roles/roles.component';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-master',
  imports: [DesignationComponent, RolesComponent, CommonModule, RouterLink],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  currentComponent: string = "Roles";

  changeTab(tabName: string) {
    this.currentComponent = tabName;
  }
}
