import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseURL = environment.baseURl
  constructor(private http:HttpClient) { }

  getAllProductionDept():Observable<[]>{
    return this.http.get<[]>(this.baseURL + "ProdDeptGetList");
  }

  addProductionDept(data:any){
    return this.http.post(this.baseURL + "ProdDeptPost", data);
  }
  deleteProductionDept(id:any){
    return this.http.delete(this.baseURL + "ProdDeptDelete/" + id);
  }
  getProdDepById(id:any){
    return this.http.get(this.baseURL + "ProdDeptById/" + id);
  }
  updateProductionDept(id:any, data:any){
    return this.http.put(this.baseURL + "ProdDeptUpdate/" + id, data);
  }
}
