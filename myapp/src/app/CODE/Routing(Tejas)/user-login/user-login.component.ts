import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { ILogin } from "src/app/Shared/model/Routing(Tejas)/login";
import { PostUserLoginRegistartionServices } from "../../../Shared/services/Routing/userLoginRegstration.services";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent implements OnInit {
  public userLog: FormGroup;
  public submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private ps: PostUserLoginRegistartionServices
  ) {}

  ngOnInit(): void {
    this.userLog = this.fb.group({
      UserLogin: this.fb.group({
        UserName: ["", Validators.required],
        Password: ["", Validators.required]
      })
    });
  }

  Save(data: ILogin) {
    this.submitted = true;
    alert(JSON.stringify(data));
    if (!this.userLog.valid) {
      return;
    }
    console.log(data);
    this.ps.PostUserLogin(data).subscribe(item => {
      let Response: any = item;
      if (Response.Error != undefined) {
        alert(JSON.stringify(Response));
      } else {
        alert(JSON.stringify(Response));
      }
    });
  }
}
