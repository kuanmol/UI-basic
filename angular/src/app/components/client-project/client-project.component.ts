import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ClientService} from '../../service/client.service';
import {ApiResponseModel, Employee} from '../../model/interface/role';
import {Client} from '../../model/class/client';

@Component({
  selector: 'app-client-project',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  clientSrv = inject(ClientService);
  employeeList: Employee[] = [];
  clientList: Client[] = [];

  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.clientSrv.getAllEmployee().subscribe((res: ApiResponseModel) => {
      this.employeeList = res.data;
    })
  }
  getAllClient() {
    this.clientSrv.getAllClients().subscribe((res: ApiResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveProject() {
    const formValue=this.projectForm.value;
    this.clientSrv.addClientProjectUpdate(formValue).subscribe((res: ApiResponseModel) => {
      if(res.result){
        alert("project updated successfully");
      }else {
        alert("project not updated successfully");
      }
    })
  }

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("",[Validators.required,Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(""),
  })
}
