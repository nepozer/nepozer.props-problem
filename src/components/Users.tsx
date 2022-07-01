import React, { FC } from "react";
import { IUser } from "../interfaces/IUser";




const Users= (userInfo: IUser) =>{


    return (
        <div className="">
            {userInfo.name} lives in {userInfo.city}
        </div>
    )
}


export default Users;