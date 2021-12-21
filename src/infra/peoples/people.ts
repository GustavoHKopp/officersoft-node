import { PeopleDTO } from "../../interfaces/peopleInterface";

export default class Peoples {
  peopleList: PeopleDTO[] = [{
      nome: "Jonas Antonio",
      CPF: '12182137874',
      endereco: 'rua havana',
      numero: '390',
      bairro: 'estados',
      complemento: 'casa',
      municipio: 'indaial',
      UF: 'SC',
      RG: '267406691'
  },
  {
      nome: "Marcos Felipe",
      CPF: '88355708679',
      endereco: 'rua palmeiras',
      numero: '230',
      bairro: 'carijos',
      complemento: 'apartamento',
      municipio: 'blumenau',
      UF: 'SC',
      RG: '483559155'
  },
  {
      nome: "José Carlos",
      CPF: '43591918478',
      endereco: 'rua indaiatuba',
      numero: '150',
      bairro: 'rio morto',
      complemento: 'casa',
      municipio: 'indaial',
      UF: 'SC',
      RG: '193866752'
  },
  {
      nome: "Carlos Eduardo",
      CPF: '84723101675',
      endereco: 'rua jaqueira',
      numero: '608',
      bairro: 'Paciencia',
      complemento: 'casa',
      municipio: 'Rio de Janeiro',
      UF: 'RJ',
      RG: '253036719'
  },
  {
      nome: "Henrique Vasgestian Estellet",
      CPF: '08157227968',
      endereco: 'Vanderlei Tavares Estellet',
      numero: '164',
      bairro: 'Cidade Alta',
      complemento: 'apartamento',
      municipio: 'Araranguá',
      UF: 'SC',
      RG: '454845194'
  },
  {
      nome: "Nara Vasgestian Viana",
      CPF: '89809746555',
      endereco: 'Praça Graccho Cardoso',
      numero: '689',
      bairro: 'São José',
      complemento: 'condominio',
      municipio: 'Aracaju',
      UF: 'SE',
      RG: '318228579'
  },
  {
      nome: "Emanuelle da Cunha Anastacio",
      CPF: '55529933904',
      endereco: 'Rua Gavião Caçador',
      numero: '134',
      bairro: 'Condomínio Residencial Italian Ville',
      complemento: 'casa',
      municipio: 'Arapongas',
      UF: 'PR',
      RG: '320257411'
  },
  {
      nome: "Lorenna Peres Geraldo",
      CPF: '23446813616',
      endereco: 'Quadra 5 Conjunto C',
      numero: '56',
      bairro: 'Setor Habitacional Jardim Botânico',
      complemento: 'casa',
      municipio: 'Brasília',
      UF: 'DF',
      RG: '141715741'
  },
]

getAllPeoples(): PeopleDTO[]{
  return this.peopleList
}

addPeople(people: PeopleDTO): void{
      this.peopleList.push(people) 
}


getByCpf(cpf: string): PeopleDTO[]{
  let people = this.peopleList.filter((people) => people.CPF === cpf)
  return people
}

removeByCpf(cpf: string): void{
  this.peopleList = this.peopleList.filter((people) => people.CPF !== cpf)
}

}