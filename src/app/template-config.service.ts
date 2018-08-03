import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemplateConfigService {

  constructor(private http:HttpClient) { }

  getConfig() {
    return this.http.get<Config>("api/data.json");
  }
}

export interface Config {
  data: any;
}
