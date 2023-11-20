import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyApiService {

  private url: string = "https://rickandmortyapi.com/api/character";

  constructor(
    private http: HttpClient
  ) { }

  get apiListAllCharecters():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap( res => res),
      tap( res => {
        res.results.map((resRickMorty: any) => {
          this.apiGetCharacters(resRickMorty.url).subscribe(
            res => resRickMorty = res
          )
        })
      })
    )
  }

  public apiGetCharacters(url: string):Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
}
