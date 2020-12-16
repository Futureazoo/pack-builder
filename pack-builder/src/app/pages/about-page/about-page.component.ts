import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendClick() {
      var yourMessage = "MESSAGE";
      var subject = "SUBJECT";
      document.location.href = "mailto:mauld@uci.edu?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
  }

}
