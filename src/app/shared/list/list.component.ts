import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Interface } from 'src/app/interface/interface';
import { RickMortyApiService } from 'src/app/service/rick-morty-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  public getAllCharacters: any;
  private setAllCharacters: any;

  public apiError: boolean = false;
  public pages: number = 1;

  private urlApi = "https://rickandmortyapi.com/api/character/?page="

  constructor(
    private rickMortyApiService: RickMortyApiService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rickMortyApiService.apiListAllCharecters.subscribe({
      next: (res) => {
        this.setAllCharacters = res.results;
        this.getAllCharacters = this.setAllCharacters;
        console.log(this.getAllCharacters);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  public atualizaPersonagens() {
    if(this.pages <= 41) {
      this.pages = this.pages + 1;
    }
    if(this.pages > 41) {
      this.pages = 1;
    }
    this.http.get<Interface>(`${this.urlApi + this.pages}`).subscribe({
      next: (res) => {
        this.setAllCharacters = res.results.map((character) => character);
        this.getAllCharacters = this.setAllCharacters;
        console.log(this.getAllCharacters);
      },
      error: (error) => {
        console.error('Erro na requisição:', error);
      }
    });
  }

  public getSearch(value: any) {
    const filter = this.setAllCharacters.filter((res: any) => {
      return res.name.toLowerCase().indexOf(value.toLowerCase()) === 0;
    });
  
    this.getAllCharacters = filter;
  }

  public navigateToDetails(id: number): void {
    this.router.navigate(['details', id]);
  }


}
