import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lojavirtual';

  constructor(private http: HttpClient){
    this.getProducts()
  }
  //o HttpClient é que vai buscar as informações no banco

  getProducts(){
    this.http.get('http://localhost:9001/products').subscribe((response:any) => {
      console.log(response)
    })
  }
}
