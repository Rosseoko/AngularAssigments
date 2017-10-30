import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
    feedbackForm: FormGroup;
    feedback: Feedback;
    contactType = ContactType;
  
    constructor(private fb: FormBuilder) {
      this.createForm();
    }
  
    ngOnInit() {
    }
  

    //construct a form, parts
    createForm() {

      // variable, use form builder which provides .group  
      this.feedbackForm = this.fb.group({
        firstname: '',
        lastname: '',
        telnum: 0,
        email: '',
        agree: false,
        contacttype: 'None',
        message: ''
      });
    }
  
     
    onSubmit() {
      //js object into data model. Map 
      this.feedback = this.feedbackForm.value;
      //show it is submitted correclty
      console.log(this.feedback);
      //borra, lo regresa a su estado normal
      this.feedbackForm.reset();
    }
  
  }
