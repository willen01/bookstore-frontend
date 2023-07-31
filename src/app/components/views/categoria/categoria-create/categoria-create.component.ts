import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria-read/categoria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private router: Router){}

  ngOnInit(): void {
       
  }

  create(): void {
    this.service.create(this.categoria).subscribe((response) => {
      this.router.navigate(['categorias'])
      this.service.message("Categoria criada com sucesso");
    }, e => {
        for(let i = 0; i < e.error.erros.length; i++) {
          this.service.message(e.error.erros[i].message)
        }
    });
  }
}
