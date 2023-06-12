import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { ServisService } from '../servis.service';
import { Prijava } from '../models/prijava';
import { Polaganje } from '../models/polaganje';

@Component({
  selector: 'app-kandidat',
  templateUrl: './kandidat.component.html',
  styleUrls: ['./kandidat.component.css']
})
export class KandidatComponent implements OnInit {

  constructor(private router:Router, private servis:ServisService) { }

  polaganja:Polaganje[] = []
  ulogovan:Korisnik
  polozena_teorija:boolean = false
  polozena_voznja:boolean = false
  tip:string;
  grad:number;
  sva_mesta:any[]
  async ngOnInit(){
    this.polaganja = []
    this.ulogovan=JSON.parse(localStorage.getItem("ulogovan"))
    this.servis.sva_mesta().subscribe((res:any[])=>{
      this.sva_mesta = res
    })
    this.servis.sve_prijave_za_usera(this.ulogovan.username).subscribe((res:Prijava[])=>{
      console.log("usao")
      if(res){
        for(let r of res){
          this.servis.mesto_za_id(r.mesto).subscribe((resss)=>{
            r.mesto_naziv=resss['naziv']
          })
         
          this.servis.dohvati_polaganje(r.idPrijava).subscribe((ress:Polaganje)=>{
            if(ress){
              ress.prijava = r
              this.polaganja.push(ress)
              if(ress.polozio && ress.prijava.vrsta=='t') this.polozena_teorija = true
              if(ress.polozio && ress.prijava.vrsta=='v') this.polozena_voznja = true
            }
          })
        }
      }
    })
  }
  logout(){
    localStorage.removeItem("ulogovan")
    this.router.navigate([""])
  }
  dodaj(){
    if(!this.tip || !this.grad){ console.log("greska"); return;
    }
    const data={
      vrsta:this.tip,
      mesto:this.grad,
      username:this.ulogovan.username,
      status:'0'
    }
    this.servis.dodaj_prijavu(data).subscribe((res)=>{
      if(res['message']=='ok') this.ngOnInit()
    })
  }

}
