import { Component, Input } from '@angular/core';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneroService } from '../../genero/genero.service';
import { Genero } from '../../genero/genero';


@Component({
  selector: 'app-editar-filme',
  templateUrl: './editar-filme.component.html',
  styleUrls: ['./editar-filme.component.css']
})
export class EditarFilmeComponent {

  constructor(private filmeService: FilmeService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private generoService: GeneroService) {

    this.form = this.formBuilder.group({
      titulo: [null],
      diretor: [null],
      duracao: [null],
      genero: { id: [null], nome: [null] },
      sinopse: [null],
      imagem: [null]

    })
  }
  form: FormGroup;

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

  listaGenero: Genero[] = []

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.filmeService.getById(parseInt(id!)).subscribe((data) => {
      this.filme = data
    })

    this.generoService.getGenero().subscribe((data) => this.listaGenero = data)
    
  }

  onEdit() {
    this.filmeService.putFilme(this.filme).subscribe(() => {
      this.router.navigate(['/listarFilmes'])
    })
  }
}

