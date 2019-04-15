import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ComprasModel from 'src/models/comprasModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  url = 'http://localhost:4000/consulta';

  constructor(private http: HttpClient) { }

  adicionarCompra(model: ComprasModel): Observable<any> {
    return this.http.post(`$this.url/add`, model);
  }
  editarCompra(model: ComprasModel): Observable<any> {
    return this.http.put(`$this.url/add`, model);
  }
}
