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

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css'],
  providers: [MessageService]
})
export class FormUsersComponent implements OnInit {

  user:User = new User();
  status:any[];
  public updating:boolean = false;
  fileUploaded:any;
  msgs2: Message[] = [
    {severity:'info', summary:'Info Message', detail:'PrimeNG rocks'}
  ];

  // userEmails:Email[] = [
  //   {id: 0, email: 'asd'}
  // ];

  userStringEmails:string[] = [

  ];
  // uploadForm:FormGroup;

  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
    private userService:UserService,
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private formBuilder:FormBuilder,
    private messageService: MessageService) { 
    this.status = [
      {name:'active', value:1},
      {name:'inactive', value:0}
    ]

    console.log(this.config.data.id);
    if(this.config.data.id != null){
      let id  = this.config.data.id;
      if(id != 0){
        this.updating = true;
        this.userService.findById(id).subscribe(u => {
          this.user = u;
          // this.userEmails[0] = this.user.emails[0];
          this.user.emails.forEach(e => {
            console.log(e.email);
            this.userStringEmails.push(e.email);
          })
          console.log(this.userStringEmails);
        });
        
      }else{
        this.updating = false;
      }
    }

  }

  ngOnInit(): void {
  }



  save():void{

    console.log("saving");
    // this.user.emails = this.userEmails;
    this.user.emails = [

    ];
    this.user.id = 0;
    // this.user.emails.map( e => {
    //   e.id = null;
    // })

    console.log(this.userStringEmails);
    this.userStringEmails.forEach( e => {
      this.user.emails.push(new Email(null, e));
    })

    
    console.log("emails: ");
    console.log(this.user.emails);


    if(this.validateInputs()){
      console.log(JSON.stringify(this.user));
      const formData = new FormData();
      formData.append('file', this.fileUploaded);
      formData.append('user', JSON.stringify(this.user))
  
  
      
      // console.log(this.uploadForm.get('file').value);
      this.userService.save(formData).subscribe(e => {
        this.messageService.add({severity:'success', summary:'Created', detail:'User Created'});
        this.close("Created");
      });
    }



    // this.close();
    // this.router.navigate(['/']);
  }

  update():void{
    console.log("updating");
    // this.user.emails = this.userEmails;
    this.user.emails = [

    ];
    // this.user.emails.map( e => {
    //   e.id = null;
    // })
    this.userStringEmails.forEach( e => {
      this.user.emails.push(new Email(null, e));
    })

    console.log(this.user.emails);

    if(this.validateInputs()){
      console.log(JSON.stringify(this.user));
      const formData = new FormData();
      formData.append('file', this.fileUploaded);
      formData.append('user', JSON.stringify(this.user))
  
  
      
      // console.log(this.uploadForm.get('file').value);
      this.userService.update(formData).subscribe(e => {
        this.messageService.add({severity:'success', summary:'Updated', detail:'User Updated'});
        this.close("Updated");
      });
    }

    



  }

  // onFileSelect(event){
  //   this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
  //   console.log("changing");
  //   // console.log(event.target.files);
  //   if(event.target.files.length>0){
  //     console.log(event.target.files[0]);
  //     // const f = event.target.files[0];
  //     // this.uploadForm.get('file').setValue(f);
  //   }
  // }

  onBasicUpload(event) {
    console.log("on basic upload");
    console.log(event.files[0]);
    this.fileUploaded = event.files[0];
    // console.log(event.target.files);
    this.messageService.add({severity: 'info', summary: 'Uploaded', detail: `File ${this.fileUploaded.name} uploaded`});
  }

  close(messageOp:string){
    //send list of users updated
    this.userService.findAll().subscribe(users => {

      // const mapArgs = new Map<String, Object>();

      // mapArgs.set('message', messageOp);
      // mapArgs.set('users', users)

      let mapArgs = new Map([
        ["message",messageOp],
        ["users", users]
      ])

      this.ref.close(mapArgs)
    });
  }

  addInputErrorMessage(input:string){
    console.log("add input error message");
    // this.msgs2.push()
    this.messageService.add({severity:'error', summary:'Fiel Required', detail:`Field ${input} is required`});
    console.log(this.msgs2);
  }

  clearMessages():void{
    this.msgs2 = [];
  }

  validateInputs():boolean{


    let flag = true;
    console.log("validating");
    console.log(this.user.name);
    console.log(this.user.gender);
    console.log(this.user.emails);
    if(this.user.name === '' || this.user.name == undefined){
      this.addInputErrorMessage("Name")
      flag = false;
    }
    if(this.user.gender === '' || this.user.gender == undefined){
      this.addInputErrorMessage("Gender")
      
      flag = false;
    }
    if(this.user.emails.length === 0){
      this.addInputErrorMessage("Emails");
      flag = false;
    }
    return flag;
  }
}
