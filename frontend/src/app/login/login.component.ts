import { Component, OnInit } from '@angular/core';
import { ServisService } from '../servis.service';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servis:ServisService, private router:Router) { }

  username:string;
  password:string;
  greska:string;
  ngOnInit(): void {
  }

  sve_ok_kandidat(user){
    localStorage.setItem("ulogovan", JSON.stringify(user))
    this.router.navigate(['kandidat'])
  }
  login(){
    if(!this.username || !this.password){
      this.greska="Unesite sve";
      return;
    }
    this.servis.login(this.username, this.password).subscribe((res:Korisnik)=>{
      if(!res){
        this.greska="Nema info"
        return;
      }
      if(res.jeInspektor){
        this.servis.mesto_za_id(res.mesto).subscribe((ressss)=>{
          res.mestoNaziv = ressss['naziv']
          localStorage.setItem("ulogovan", JSON.stringify(res))
          this.router.navigate(['inspektor'])
        })
      }else{
        let dat = new Date(res.datumRodjenja)
        let cur = new Date()
        if((cur.getFullYear() - dat.getFullYear())>18){
          //sve ok
          this.sve_ok_kandidat(res)
        }else{
          if((cur.getFullYear() - dat.getFullYear())==18){
            if((cur.getMonth()-dat.getMonth())>0){
              //opet ok
              this.sve_ok_kandidat(res)
            }else if((cur.getDate()-dat.getDate())==0){
              //opet sve ok
              this.sve_ok_kandidat(res)
            }else{
              //nije ok
              this.greska="Nemate 18"
            }
          }else{
            //nije ok
            this.greska="Nemate 18"
          }
        }
      }
    })  
  }

}
