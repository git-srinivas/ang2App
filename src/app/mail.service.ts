import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  message = [
  { id:0,  text:'from me srinivas'},
  { id:1,  text:'this email is'},
  { id:2,  text:'got htrough the email'}
]
update(id,text){
 this.message = this.message.map(m =>
  m.id === id
    ?{id,text}
    :m
  )
}
  constructor() { }

}
