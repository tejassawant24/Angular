import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Iuser } from "../../Shared/model/Reactive Form/reactiveuser1";
import { Regx } from "./regx";

@Component({
  selector: "app-reactive1",
  templateUrl: `../reactiveForm(tejas)/reactive1.component.html`,
  styleUrls: [`../reactiveForm(tejas)/reactive1.component.css`]
})
export class ReactiveFormComponent implements OnInit {
  public userForm: FormGroup;
  public submitted: boolean = false;
  constructor(private FB: FormBuilder) {}
  ngOnInit(): void {
    this.userForm = this.FB.group({
      firstName: [
        "",
        [Validators.required, Validators.minLength(5), Regx.Firstname]
      ],
      lastName: [
        "",
        [Validators.required, Validators.minLength(5), Regx.Lastname]
      ],
      password: [
        "",
        [Validators.required, Validators.minLength(5), Regx.Password]
      ],
      email: ["", [Validators.required, Validators.minLength(10), Regx.Email]],
      address: ["", [Validators.required, Validators.minLength(5)]],
      contactNo: [
        "",
        [Validators.required, Validators.maxLength(10), Regx.ContactNo]
      ],
      country: [
        "",
        [Validators.required, Validators.minLength(2), Regx.Country]
      ],
      dob: ["", [Validators.required, Validators.maxLength(8), Regx.DOB]]
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
