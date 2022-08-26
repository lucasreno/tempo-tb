import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results } from '../interface/results';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  result: Results = new Results();

  constructor(private http: HttpClient) {
    this.result.forecast = [{
      condition: '',
      date: '',
      description: '',
      max: 0,
      min: 0,
      weekday: ''
    }];
  }

  ngOnInit(){
    const url = 'https://cors-anywhere.herokuapp.com/https://api.hgbrasil.com/weather?woeid=457351';
    this.http.get(url).subscribe(
      response => this.result = response["results"]
    );
    
  }
}
