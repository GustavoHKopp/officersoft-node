import {Router, Request, Response } from 'express'
import People from '../infra/newPeople/newPeople'
import Peoples from '../infra/peoples/people'

const route = Router()
export const peoples = new Peoples

route.get('/peoples/all', (_: Request, res: Response) => {
  res.json(peoples.getAllPeoples())
})

route.get('/people/:CPF', (req: Request, res: Response) => {
  res.json(peoples.getByCpf(req.params.CPF))
})

route.post('/people/add', (req: Request, res: Response) => {
  const { nome, CPF, endereco, numero, bairro, complemento, municipio, UF, RG } = req.body
  const newPeople = new People( nome, CPF, endereco, numero, bairro, complemento, municipio, UF, RG)
  peoples.addPeople(newPeople)
  res.json(newPeople)
})

route.delete('/people/:CPF', (req: Request, res: Response) => {
  const {CPF} = req.params
  try{
    peoples.removeByCpf(CPF)
    res.json({message:'NO CONTENT', code: 204})
  }catch (err){
    res.json({error: err, code:400})
  }
})

export {route}