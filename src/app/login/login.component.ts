import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TOKEN_NAME, AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulaire: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private authService: AuthentificationService) { }

  private token = localStorage.getItem(TOKEN_NAME)

  ngOnInit() {
    this.formulaire = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.formulaire.controls; }

    onSubmit() {
      const username = this.formulaire.get("username").value;
      const password = this.formulaire.get("password").value;  
        this.submitted = true;
        // stop here if form is invalid
        if (this.formulaire.invalid) {
            return;
        }
        const user = {
          username: username,
          password: password
        }
        //console.log(this.authService.login(user));
        this.authService.login(user)
        console.log(this.formulaire.value)
    }

}
