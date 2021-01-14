import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TiffinProvider } from '../models/tiffinprovider';
import { TiffinProviderMenu } from '../models/TiffinProviderMenu';

@Injectable({
  providedIn: 'root'
})
export class TiffinserviceService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl='http://localhost:42000/';
   }


   getTiffinProviderById(id: Number): Observable<TiffinProvider> {
    
    return this.http.get<TiffinProvider>('http://localhost:42000/api/TiffinProvider/getTiffinProvider/'+id);      
  }

  updateTiffinProvider(id: number, value:any):Observable<Object>{
    
    debugger
    return this.http.put(`http://localhost:42000/api/TiffinProvider/updateTiffinProvider/${id}`,value)
  }

  getTiffinProviderMymenu(id: Number): Observable<TiffinProviderMenu[]> {
    
    return this.http.get<TiffinProviderMenu[]>(this.baseUrl+'api/TiffinProvider/getMyMenu/'+id);      
  }
 getTiffinProviderPendingmenu(id: Number): Observable<TiffinProviderMenu[]> {
    
    return this.http.get<TiffinProviderMenu[]>(this.baseUrl+'api/TiffinProvider/getPendingMenu/'+id);      
  }

  getTiffinProviderDeclainedmenu(id: Number): Observable<TiffinProviderMenu[]> {
    
    return this.http.get<TiffinProviderMenu[]>(this.baseUrl+'api/TiffinProvider/getDeclainedMenu/'+id);      
  }



}
