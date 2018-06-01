import {Injectable} from "@angular/core";
import {Product} from "./product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductService {
  private _productUrl = './api/products/products.json';

  constructor(private _httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(this._productUrl);
  }
}
