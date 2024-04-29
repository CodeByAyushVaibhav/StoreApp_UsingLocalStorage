import { Component,ElementRef,OnInit,Renderer2} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private elementRef:ElementRef, private renderer:Renderer2, private router: Router) {}
  
  SignUpUser: any[]=[];
  SignUpUserObj: any = {
    UserName: "",
    Email: "",
    Password: ""
    
  };

  LoginUserObj:any = {
    UserName: "",
    Password: ""
  }

  onSignUp(){
    this.SignUpUser.push(this.SignUpUserObj);
    localStorage.setItem("SignupUser", JSON.stringify(this.SignUpUser));
    alert(this.SignUpUserObj.UserName + "'s Registration Successfull");
    this.SignUpUserObj = {
      UserName: "",
      Email: "",
      Password: ""
      
    };
  }

  onLogin(){
  const isUserExist = this.SignUpUser.find(m=>m.UserName
   == this.LoginUserObj.UserName && m.Password == this.LoginUserObj.Password);
   if(isUserExist != undefined){
    alert("Login Successfull");
    this.router.navigate(['\layout']);
   }
   else{
    alert("Invalid Credentials");
   }

  }
  
  ngOnInit(): void {
    const localStorageData = localStorage.getItem("SignupUser")
    if(localStorageData!=null)
      {
        this.SignUpUser = JSON.parse(localStorageData);
      }

  }

  ngAfterViewInit(){
    const loginText = this.elementRef.nativeElement.querySelector(".title-text .login");
    const loginForm = this.elementRef.nativeElement.querySelector("form.login");
    const loginBtn = this.elementRef.nativeElement.querySelector("label.login");
    const signupBtn = this.elementRef.nativeElement.querySelector("label.signup");
    const signupLink = this.elementRef.nativeElement.querySelector("form .signup-link a");

    signupBtn.addEventListener('click', () => {
      this.renderer.setStyle(loginForm, 'marginLeft', '-50%');
      this.renderer.setStyle(loginText, 'marginLeft', '-50%');
    });

    loginBtn.addEventListener('click', () => {
      this.renderer.setStyle(loginForm, 'marginLeft', '0%');
      this.renderer.setStyle(loginText, 'marginLeft', '0%');
    });

    signupLink.addEventListener('click', (event: { preventDefault: () => void; }) => {
      signupBtn.click();
      event.preventDefault(); // Prevent the default action of the link
    });
  }



  
  }

  




