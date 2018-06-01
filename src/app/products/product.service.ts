import {Injectable} from "@angular/core";
import {Product} from "./product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

@Injectable()
export class ProductService {
  private _productUrl = './api/products/products.json';

  constructor(private _httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(this._productUrl)
      .do(data => console.log('ALL: ' + JSON.stringify(data)))
      .catch(this.handlerError);
  }

  private handlerError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
