export interface IAddress {
    city: string,
    street : string
}


export interface IUser {
    id: number,
    name : string,
    "e-mail" : string
    address: IAddress
}


export interface IUserCardProps {
    user : IUser
}