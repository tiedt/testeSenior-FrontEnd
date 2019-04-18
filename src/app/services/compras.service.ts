import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComprasModel } from '../models/comprasModel';


@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(private http: HttpClient) { }

  adicionarCompra(model: ComprasModel): Observable<any> {
    return this.http.post(`http://localhost:3000/compras/post`, model);
  }
  editarCompra(model: ComprasModel): Observable<any> {
    return this.http.put(`$this.url/add`, model);
  }
  public getCompras(): Promise<ComprasModel[]> {
     return this.http.get('http://localhost:3000/compras')
     .toPromise().then((resposta: any) => resposta.json());
  }
}
