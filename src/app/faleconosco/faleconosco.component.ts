
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FaleconoscoService } from './service/faleconosco.service';
import { ModalComponentv2 } from '../shared/modal/modalv2.component' ;
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faleconosco',
  templateUrl: './faleconosco.component.html',
  styleUrls: ['./faleconosco.component.css']
})
export class FaleconoscoComponent implements OnInit {
  


  faleconoscoForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private faleconoscoservice: FaleconoscoService,
      public dialog: MatDialog,
      private router: Router
      ) { }
  
  ngOnInit(): void {
    this.faleconoscoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['',[ 
        Validators.required,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
        ]
      ],
      email:['',[
        Validators.email,
        Validators.required]
      ],
      interesse:['',Validators.required],
      mensagem:['',Validators.required]
    });
}

falarconosco(){

  const nome = this.faleconoscoForm.get('nome').value;
  const email = this.faleconoscoForm.get('email').value;
  const telefone = this.faleconoscoForm.get('telefone').value;
  const interesse = this.faleconoscoForm.get('interesse').value;
  const mensagem = this.faleconoscoForm.get('mensagem').value;


  this.openDialog('SUA MENSAGEM FOI RECEBIDA COM SUCESSO !');
  this.faleconoscoservice
    .enviamensagem(nome, telefone,email, mensagem, interesse)
    .subscribe(
      ()=>{
        console.log('Mensagem Enviada com Sucesso')
        

        this.faleconoscoForm.reset();
        this.router.navigate(['/principal']);
      },
    
      err=>{
        console.log(err);
      }
      );

}


openDialog(tit: string): void {

  const path='../../assets/email.gif';

  const dialogRef = this.dialog.open(ModalComponentv2, {
    width: 'auto',
    data: {
      titulo: tit,
      caminho: path
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    // this.animal = result;
  });
}




}
