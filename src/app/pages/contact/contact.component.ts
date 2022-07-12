import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  profileContact: FormGroup;
  constructor() {
    this.profileContact = new FormGroup({
      name: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      contact: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }
  sendContact(){
    console.log(this.profileContact.value);
  }


}
