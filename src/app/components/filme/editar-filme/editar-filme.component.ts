import { Component, Input } from '@angular/core';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-editar-filme',
  templateUrl: './editar-filme.component.html',
  styleUrls: ['./editar-filme.component.css']
})
export class EditarFilmeComponent {
  form: FormGroup

  constructor(private filmeService: FilmeService,
    private router: Router,
    private route: ActivatedRoute,
    form: FormBuilder) { }
  @Input() filme: Filme = {
    id: 0,
    titulo: '',
    diretor: '',
    duracao: 0,
    genero: {
      id: 1,
      nome: '',

    },
    sinopse: '',
    imagem: ''
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.filmeService.getById(parseInt(id!)).subscribe((data) => {
      this.filme = data
    })
  }

  putFilme() {
    this.filmeService.putFilme(this.filme).subscribe(() => {
      this.router.navigate(['/listarFilmes'])
    })
  }
}

