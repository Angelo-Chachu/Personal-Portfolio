import { Component, OnInit } from '@angular/core';
import { faMapLocation, faLocationDot,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
   location = faLocationDot;
   email = faEnvelope;
   phone = faPhone;  
  constructor() { }

  ngOnInit(): void {
  }

}
