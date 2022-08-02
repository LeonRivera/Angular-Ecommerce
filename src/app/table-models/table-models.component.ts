import { Component, OnInit } from '@angular/core';
import {DialogService} from 'primeng/dynamicdialog';
import { FormModelsComponent } from '../form-models/form-models.component';
import { Model } from '../models/model';
import { User } from '../models/user';
import { AbstractRepository } from '../services/abstract-repository';
import { ModelService } from '../services/model.service';
import { OperationUtils } from '../utils/operation-utils';

@Component({
  selector: 'app-table-models',
  templateUrl: './table-models.component.html',
  styleUrls: ['./table-models.component.css'],
  providers: [DialogService]
})
export class TableModelsComponent implements OnInit {
  private operationUtils: OperationUtils;
  models: Model[];
  users: User[];

  id:number = 0;
  
  // models = [
  //   {fieldString: "Value",fieldNumber:3, fieldDate:'2021-07-21'},
  //   {fieldString: "Value 4",fieldNumber:4, fieldDate:'2021-07-21'},
  //   {fieldString: "Value 5",fieldNumber:5, fieldDate:'2021-07-21'},
  // ]

  constructor(private modelService: ModelService,
    public dialogService: DialogService) {
    this.modelService.findAll().subscribe((m) => (this.models = m));
    this.operationUtils = new OperationUtils();
  }

  ngOnInit(): void {
    this.modelService.findAll().subscribe((m) => (this.models = m));
  }

  delete(id: number) {
    this.modelService.deleteById(id).subscribe();
    this.models = this.models.filter( m => m.id != id);
    console.log(this.models);
  }

  setIdEditDialog(id:number){
    this.id = id;
    this.show();
  }

  show(){
    const ref = this.dialogService.open(FormModelsComponent, {
      data: {
        id: this.id
      },
      header: 'Model',
      width: '70%',
      height: '100%'
  });
  }
}
