import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Iregistration } from "../../../Shared/model/Routing(Tejas)/userRegistration";
import { PostUserLoginRegistartionServices } from "../../../Shared/services/Routing/userLoginRegstration.services";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.css"]
})
export class UserRegistrationComponent implements OnInit {
  public userReg: FormGroup;
  public submitted: boolean = false;
  constructor(
    private FB: FormBuilder,
    private ps: PostUserLoginRegistartionServices,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userReg = this.FB.group({
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required],
      MobileNo: ["", Validators.required],
      EmailId: ["", Validators.required],
      UserLogin: this.FB.group({
        UserName: ["", Validators.required],
        Password: ["", Validators.required]
      })
    });
  }

  Save(data: Iregistration) {
    this.submitted = true;
    if (!this.userReg.valid) return;
    console.log(data);

    this.ps.PostUserRegistration(data).subscribe(item => {
      console.log(this.ps.PostUserRegistration(data).subscribe());
      let Response: any = item;
      if (Response.UserLogin == true) {
        this.router.navigateByUrl("/login");
      } else if (Response.Error != undefined) {
        alert(Response.Error);
      }
    });
  }
}
