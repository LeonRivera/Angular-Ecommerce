import { Component, OnInit, Optional } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Customer } from '../models/customer';

import { ActivatedRoute, Router } from '@angular/router';
import { Model } from '../models/model';
import { ModelService } from '../services/model.service';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Email } from '../models/email';
import { CustomerService } from '../services/customer.service';
import { CardCodeConfirmComponent } from '../card-code-confirm/card-code-confirm.component';
import { EmailSenderService } from '../services/email-sender.service';

@Component({
  selector: 'app-form-customers',
  templateUrl: './form-customers.component.html',
  styleUrls: ['./form-customers.component.css'],
})
export class FormCustomersComponent implements OnInit {


  customer:Customer = new Customer();
  status:any[];
  public updating:boolean = false;
  fileUploaded:any;

  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
    private customerService:CustomerService,
    @Optional()
    public ref: DynamicDialogRef, 
    @Optional()
    public config: DynamicDialogConfig,
    private formBuilder:FormBuilder,
    private userService: UserService,
    public dialogService: DialogService,
    private messageService: MessageService,
    private emailSenderService:EmailSenderService) { }

  ngOnInit(): void {
  }


  onBasicUpload(event) {
    console.log("on basic upload");
    console.log(event.files[0]);
    this.fileUploaded = event.files[0];
    // console.log(event.target.files);
    this.messageService.add({severity: 'info', summary: 'Uploaded', detail: `File ${this.fileUploaded.name} uploaded`});
  }

  save(){
    console.log("Saving");
    const formData = new FormData();
    formData.append('file', this.fileUploaded);
    formData.append('customer', JSON.stringify(this.customer))

    this.customerService.save(formData).subscribe(e => {
      console.log("Created");
      console.log(e);
      this.router.navigate(['/login']);
    })
  }
  update(){

  }

  showDialog(operation:string):void{


    

    let code = "";
    console.log(this.customer.email);
    this.emailSenderService.sendCode(this.customer.email).subscribe(e => {
      console.log(e);
      code = e;

      const ref = this.dialogService.open(CardCodeConfirmComponent, {
        data: {
          code: code
        },
        header: 'Confirmation Code',
        width: '30%',
        height: '30%',
      });
  
      ref.onClose.subscribe((isCorrect:boolean) => {
        if(isCorrect){
          this.save();

        }
      })

    });



    
  }
  

}
