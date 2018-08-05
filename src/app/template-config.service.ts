import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemplateConfigService {

  constructor(private http:HttpClient) { }

  getConfig(id:number) {
    return this.http.get<Config>(`/template/${id}`);
  }
  
  getTemplates() {
    return this.http.get<Config>("/template");
  }
}

export interface Config {
  data: any;
}
