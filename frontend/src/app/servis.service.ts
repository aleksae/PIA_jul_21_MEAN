import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServisService {

  constructor(private http:HttpClient) { }

  login(u,p){
    const data={
      username:u,
      password:p
    }
    return this.http.post("http://localhost:4000/korisnik/login", data)
  }
  sve_prijave_za_usera(u){
    const data={
      username:u
    }
    return this.http.post("http://localhost:4000/ostalo/sve_prijave_za_usera", data)
  }
  sve_prijave_za_mesto(u){
    const data={
      mesto:u
    }
    return this.http.post("http://localhost:4000/ostalo/sve_prijave_za_mesto", data)
  }
  dohvati_polaganje(u){
    const data={
      idPrijave:u
    }
    return this.http.post("http://localhost:4000/ostalo/dohvati_polaganje", data)
  }
  mesto_za_id(id){
    const data={
      idMesto:id
    }
    return this.http.post("http://localhost:4000/ostalo/mesto_za_id", data)
  }
  sva_mesta(){
    return this.http.post("http://localhost:4000/ostalo/sva_mesta", null)
  }
  dodaj_prijavu(data){
    return this.http.post("http://localhost:4000/ostalo/dodaj_prijavu", data)
  }
  dohvati_za_ki(data){
    return this.http.post("http://localhost:4000/korisnik/dohvati_za_ki", data)
  }
  dodaj_polaganje(data){
    return this.http.post("http://localhost:4000/ostalo/dodaj_polaganje", data)
  }


}
