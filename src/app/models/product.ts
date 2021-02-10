export class Product{
    private id: number
    private name: string
    private price: number
    private url: string
    private categoryId: number

    constructor(id: number, name: string, price: number, url: string, categoryId: number){
        this.id = id
        this.name = name
        this.price =price
        this.url = url
        this.categoryId = categoryId
    }

    get Id(): number{
        return this.id
    }

    set Id(value: number){
        this.id =value
    }

    get Name(): string {
        return this.name
    }

    set Name(value: string){
        this.name = value
    }

    get Price(): number {
        return this.price
    }

    set Price(value: number){
        this.price = value
    }

    get Url(): string{
        return this.url
    }

    set Url(value: string){
        this.url = value
    }

    get CategoryId(): number{
        return this.categoryId
    }

    set CategoryId(value: number){
        this.categoryId = value
    }
}