import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComprasModel } from '../models/comprasModel';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(private http: HttpClient) { }

  adicionarCompra(model: ComprasModel): Observable<any> {
    return this.http.post(`http://localhost:5007/v1/compras`, model);
  }
  editarCompra(model: ComprasModel): Observable<any> {
    return this.http.put(`http://localhost:5007/v1/compras`, model);
  }
  excluirCompra(idCompra: number): Observable<any> {
    return this.http.delete(`http://localhost:5007/v1/compras?id=${idCompra}`);
  }
  obterCompraPorId(idCompra: number): Observable<any> {
    return this.http.get(`http://localhost:5007/v1/compras/por-id/${idCompra}`);
  }
  obterCompras(): Observable<any> {
    return this.http.get(`http://localhost:5007/v1/compras/todos`);
  }

  //          Almoxarifado

  obterComprasEmEspera(): Observable<any> {
   return this.http.get(`http://localhost:5007/v1/compras/obter-compras-em-espera`)
  }
  obterComprasAprovada(): Observable<any> {
    return this.http.get(`http://localhost:5007/v1/compras/obter-compras-aprovada`)
   }
   obterComprasReprovada(): Observable<any> {
    return this.http.get(`http://localhost:5007/v1/compras/obter-compras-reprovada`)
   }
   consulta(consulta: any): Observable<any> {
    return this.http.get(`http://localhost:5007/v1/compras/consulta`, consulta)
   }
}
