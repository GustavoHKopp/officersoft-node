import { PeopleDTO } from "../../interfaces/peopleInterface";

export default class People implements PeopleDTO{
  nome: string
  CPF:string
  endereco:string
  numero: string
  bairro: string
  complemento: string
  municipio: string
  UF: string
  RG: string
  constructor(
    nome: string,
    CPF:string,
    endereco:string,
    numero: string,
    bairro: string,
    complemento: string,
    municipio: string,
    UF: string,
    RG: string
  ){
    this.nome = nome
    this.CPF = CPF
    this.endereco = endereco
    this.numero =  numero
    this.bairro = bairro
    this.complemento = complemento
    this.municipio = municipio
    this.UF = UF
    this.RG = RG
  }

}