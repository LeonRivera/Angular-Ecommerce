import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from '../models/model';
import { ModelService } from '../services/model.service';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-form-models',
  templateUrl: './form-models.component.html',
  styleUrls: ['./form-models.component.css']
})
export class FormModelsComponent implements OnInit {



  public model:Model = new Model();
  public updating:boolean = false;

  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
    private modelService:ModelService,
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig) { }
    // ) { }

  ngOnInit(): void {
    this.updating = this.loadIdParam();

    if(this.config.data.id != null){
      let id  = this.config.data.id;
      if(id != 0){
        this.modelService.findById(id).subscribe(m => this.model = m);
      }
    }
    
    // console.log(this.updating);
  }

  public loadIdParam():boolean{
    let id = "";
    this.activatedRoute.params.subscribe(params => {
      id = params['id'];
      console.log(id);
      if(id){
        this.modelService.findById(Number(id)).subscribe(
          model => this.model = model
        )
      }
    })
    console.log(this.model);
    if(id === undefined){
      return false;
    }else{
      return true;
    }
  }

  save():void{
    this.modelService.save(this.model).subscribe();
    this.router.navigate(['/']);
  }

  update():void{
    this.modelService.update(this.model).subscribe();
    this.router.navigate(['/']);
  }



}
