import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  lenguage: any;

  constructor(private _activateroute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
