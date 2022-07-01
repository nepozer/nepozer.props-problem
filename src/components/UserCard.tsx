import { IUserCardProps } from "../interfaces/IUser"


export const UserCard = ({user} : IUserCardProps) => {
    return(

        <div>
           {user.id}. {user.address.city}
        </div>
    )
}

