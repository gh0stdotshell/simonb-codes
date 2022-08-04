import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('pageInfo') main!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  scrollToAnchor(e: string) {
    const element = document.getElementById(e);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
