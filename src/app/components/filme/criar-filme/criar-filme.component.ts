import { Component } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Filme } from '../filme';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-filme',
  templateUrl: './criar-filme.component.html',
  styleUrls: ['./criar-filme.component.css']
})
export class CriarFilmeComponent {

  form: FormGroup;

  constructor(
    private service: FilmeService,
    private router: Router,
    private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      titulo: [null],
      diretor: [null],
      duracao: [null],
      genero: { id: [null], nome: [null] },
      sinopse: [null],
      imagem: [null]

    })
  };

  filme: Filme = {
    id: 0,
    titulo: '',
    diretor: '',
    duracao: 0,
    genero: { id: 0, nome: '' },
    sinopse: '',
    imagem: ''
  }

  /* postFilme(){
     return this.service.postFilme(this.filme).subscribe(() => {
       this.router.navigate(['/listarFilmes'])
     })
   }*/
  postFilme() {
    console.log('this.form.value')
  }

}
//TERMINAR DE CRIAR O POST, DESCOBRIR COMO LINK O LABEL COM O OBJETO,
//formControlName