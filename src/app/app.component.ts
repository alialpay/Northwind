import { Component } from '@angular/core';

@Component({                            // Sen bir component'sin
  selector: 'app-root',                 // Js'de süslü parantez demek obje demek
  templateUrl: './app.component.html',  // sen app.component.html'in datasını yönetecek componentsin!!!!. app.component.html sadece TS'ye güveniyor
  styleUrls: ['./app.component.css']    // köşeli parantez array demek. css'leri koyuğumuz yerdir   // ./ aynı klasör demek
})
export class AppComponent {
  title: string = 'northwind';                  //component: html'in data'sını yönettiğimiz yer
  user: string = "Ali Alpay"
  
}
