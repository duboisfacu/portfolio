import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  constructor() {}
  sentMail: number = 0;
  serviceID = 'default_service';
  templateID = 'template_97gtroo';
  userID = 'user_pkLihzb8BkQzYwOFnt3JU';

  changeSent() {
    this.sentMail = 0;
  }
  obj: any = {};
  onSubmit(e: Event) {
    emailjs
      .sendForm(
        this.serviceID,
        this.templateID,
        e.target as HTMLFormElement,
        this.userID
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.sentMail = 1;
          this.msg.reset();
        },
        (error) => {
          this.sentMail = 2;
        }
      );
  }

  msg = new FormGroup({
    from_name: new FormControl('', Validators.required),
    from_email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  ngOnInit(): void {}
}
