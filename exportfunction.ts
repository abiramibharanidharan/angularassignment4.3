import {Vechical}from './exportinterface'
import {Owner}from './exportinterface'
export function vehicalDetails(type:Vechical)
{
    console.log("Vechical Detail")
    console.log(`Vechical Name = ${type.name},Whells= ${type.wheels}, model is = ${type.model}`)
}
export function OwnerDetail(detail:Owner)
{
    console.log("Owner Detail")
    console.log(`Owner Name= ${detail.name} phone no= ${detail.pno} and City = ${detail.city} `)
}