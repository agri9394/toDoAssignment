export default class ListingTodoModel {
    id:number = Math.random()
    listingTitle?: string = "Dummy"
    isStriked:boolean = false

    constructor(listingTitle:string){
        this.listingTitle = listingTitle
    }

}