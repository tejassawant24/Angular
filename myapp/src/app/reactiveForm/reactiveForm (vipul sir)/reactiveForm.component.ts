import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Iuser } from "../../Shared/model/Reactive Form/reactiveuser";

@Component({
  selector: "app-reactive",
  templateUrl: "../reactiveForm (vipul sir)/reactives.component.html",
  styleUrls: ["../reactiveForm (vipul sir)/reactiveForm.component.css"]
})
export class ReactiveComponent implements OnInit {
  public userForm: FormGroup;
  constructor(private FB: FormBuilder) {}
  public submitted: boolean = false;

  ngOnInit(): void {
    this.userForm = this.FB.group({
      username: ["", [Validators.required, Validators.minLength(5)]],
      password: ["", Validators.required],
      email: ["", Validators.required]
    });
  }
  Save(data: Iuser) {
    this.submitted = true;
    if (!this.userForm.valid) {
      return;
    }
    console.log(data);
  }
}
