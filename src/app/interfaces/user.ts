export class Card{
    userName!:string
    date!:string | Date
    file!:string | File | null | ArrayBuffer
    content!:string


    constructor(un:string,date:string | Date, file:string | File | null | ArrayBuffer,content:string){
this.userName = un,
this.date = date,
this.file = file,
this.content = content
    }
}