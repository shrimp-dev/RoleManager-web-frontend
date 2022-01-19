export type Drink = {
    description:string
    created:string
    paidDate:string
}

export type User = {
    id:number
    name: string
    drinks: Drink[]
    description:string
    profileImgPath:string
    bannerImgPath:string
}