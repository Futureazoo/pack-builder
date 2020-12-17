import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  message_body:string = "";
  message_subject:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  // Email generating/sending code reference: https://stackoverflow.com/questions/4782068/can-i-set-subject-content-of-email-using-mailto
  sendClick() {
      document.location.href = "mailto:mauld@uci.edu?subject="
        + encodeURIComponent(this.message_subject)
        + "&body=" + encodeURIComponent(this.message_body);
  }

}
