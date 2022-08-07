import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

import { ActivatedRoute, Router } from '@angular/router';
import { Model } from '../models/model';
import { ModelService } from '../services/model.service';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { Email } from '../models/email';
import { EmailSenderService } from '../services/email-sender.service';


@Component({
  selector: 'app-card-code-confirm',
  templateUrl: './card-code-confirm.component.html',
  styleUrls: ['./card-code-confirm.component.css']
})
export class CardCodeConfirmComponent implements OnInit {


  code:string = "";

  codeInput:string = "";

  constructor(private router:Router,
    private emailSenderService:EmailSenderService,
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private formBuilder:FormBuilder,
    private messageService: MessageService) { 


      console.log(this.config.data.code);

      if(this.config.data != null){
        this.code = this.config.data.code;
      }

    }

  ngOnInit(): void {
  }

  validateCode(){

    console.log(this.codeInput);
    console.log(this.code);

    let isCorrect = false;

    if(this.codeInput == this.code){
      console.log("correcto");
      isCorrect = true
      this.ref.close(isCorrect)
    }else{
      console.log("incorrecto");
    }

    
  }

  

}
