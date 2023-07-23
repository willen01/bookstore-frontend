import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categoria } from "./categoria-read/categoria.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CategoriaService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}
  
  findAll(): Observable<Categoria[]> {
    const url = `${this.baseUrl}/categorias`;
    return this.http.get<Categoria[]>(url);
  }
}
