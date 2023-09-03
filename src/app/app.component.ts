import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Angular demo';
  userName='';
  updatedDetail=false;
  log:number[] = [];

  onToggleDetails(){
    this.updatedDetail = !this.updatedDetail;
    this.log.push(this.log.length +1);
  }

 
}
