import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Prijava } from '../models/prijava';
import { ServisService } from '../servis.service';
import { Polaganje } from '../models/polaganje';

@Component({
  selector: 'app-inspektor',
  templateUrl: './inspektor.component.html',
  styleUrls: ['./inspektor.component.css']
})
export class InspektorComponent implements OnInit {

  constructor(private router:Router, private servis:ServisService) { }

  ulogovan:Korisnik
  prijave:Prijava[] = []
  ngOnInit(): void {
    this.prijave=[]
    this.ulogovan=JSON.parse(localStorage.getItem("ulogovan"))
    this.servis.sve_prijave_za_mesto(this.ulogovan.mesto).subscribe((res:Prijava[])=>{
      if(res) {
        
        for(let p of res){
          this.servis.dohvati_za_ki({'username':p.username}).subscribe(((res:Korisnik)=>{
            if(res){
              p.ime = res.ime
              p.prezime = res.prezime
            }
          }))
          this.servis.dohvati_polaganje(p.idPrijava).subscribe((res:Polaganje)=>{
            if(res){
            
            }else{
              if(!p.status){
                this.prijave.push(p)
              }
            }
          })
        }
      }
      else{
        console.log("asas")
      }
    })
  }
  logout(){
    localStorage.removeItem("ulogovan")
    this.router.navigate([""])
  }
  izabrana_prijava:Prijava
  poeni:number;
  izbor:number;
  datum:Date
  datum1:Date
  prikaz_forme(pp:Prijava){
    this.poeni = null
    this.izbor = null
    this.izabrana_prijava = pp
  }
  salji(){
    let data
    this.datum1 = new Date(this.datum)
    if(this.izabrana_prijava.vrsta=='t'){
      //prijava za teoriju
      data={
        idPrijave: this.izabrana_prijava.idPrijava,
        brojPoena:this.poeni,
        datum: this.datum1.getFullYear()+"-"+(this.datum1.getMonth()+1)+"-"+this.datum1.getDate(),
        polozio:(this.poeni>=90) ? 1:0,
        inspektor:this.ulogovan.username
      }
    }else{
      //prijava za voznju
      data={
        idPrijave: this.izabrana_prijava.idPrijava,
        brojPoena:null,
        datum: this.datum1.getFullYear()+"-"+(this.datum1.getMonth()+1)+"-"+this.datum1.getDate(),
        polozio:this.izbor,
        inspektor:this.ulogovan.username
      }

    }


    this.servis.dodaj_polaganje(data).subscribe((res)=>{
      if(res['message']=='ok'){
        this.ngOnInit()
      }
    })


  }

}
