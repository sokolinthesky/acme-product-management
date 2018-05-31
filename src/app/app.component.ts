import { Component } from '@angular/core';
import {ProductService} from "./products/product.service";

@Component({
  selector: 'pm-root', /*name of component in HTML*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'Acme Product Management';
}
