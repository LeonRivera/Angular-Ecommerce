import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Customer } from "../models/customer";
import { CustomerService } from "../services/customer.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  customer: Customer = new Customer();

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    let customerBd = new Customer();
    this.customerService
      .findByParam(this.customer.email, "email")
      .subscribe((e) => {
        customerBd = e;

        console.log("customerBd");
        console.log(customerBd);

        console.log("customer");
        console.log(this.customer);

        if (customerBd.password == this.customer.password) {
          this.router.navigate(["/"]);
        } else {
          console.log("no puedes pasar chavo");
        }
      });
  }
}
