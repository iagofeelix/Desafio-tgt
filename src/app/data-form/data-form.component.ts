import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';



@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  public form: FormGroup;
  title = 'Desafio-TGT';

  constructor(private formbuilder: FormBuilder) {  }

  onSubmit() {
    console.log(this.form.value)
    this.form.reset();

  }

  ngOnInit() {

    this.form = this.formbuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.max(20)]],
      telefone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      sexo: []

    });
  }



}
