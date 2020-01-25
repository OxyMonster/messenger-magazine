import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-news',
  templateUrl: './popular-news.component.html',
  styleUrls: ['./popular-news.component.scss']
})
export class PopularNewsComponent implements OnInit {

  isHeadlinesPage: boolean = false; 

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.url === '/headlines' ? this.isHeadlinesPage = true : this.isHeadlinesPage = false; 
  }

}
