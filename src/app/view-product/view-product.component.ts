import { Component } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  constructor(private api:ApiService){
    api.fetchData().subscribe(
      (response)=>{
        this.products = response
      }
    )
  }
  products:any = []
}
