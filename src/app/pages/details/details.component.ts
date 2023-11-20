import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickMortyApiService } from 'src/app/service/rick-morty-api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  private urlCharacter: string = 'https://rickandmortyapi.com/api/character'

  public character: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private rickMortyApiService: RickMortyApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  public getCharacter() {
    const id = this.activatedRoute.snapshot.params['id'];
    const character = this.rickMortyApiService.apiGetCharacters(`${this.urlCharacter}/${id}`);

    return forkJoin([character]).subscribe({
      next: (res) => {
        this.character = res;
        this.isLoading = true;
      },
      error: (error) => {
        this.apiError = true;
        console.error('Erro na requisição:', error);
      }
    });
  }

  public voltar() {
    this.router.navigate(['home']);
  }
}
