export default class ListingTodoModel {
    id:number = Math.random()
    listingTitle?: string = "Dummy"
    isStriked:boolean = false

    constructor(listingTitle:string){
        this.listingTitle = listingTitle
    }

    static getHeaderTitleForTodoList = (list:ListingTodoModel[]) => {
        const count = list.filter((e)=>{
          return e.isStriked === true
        })
        return `Total todos remaining: ${list.length - count.length} out of ${list.length}`
      }
}