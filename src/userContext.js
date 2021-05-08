import React, { useState } from "react";

let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({children}) => {
    let [userList,setuserList]=useState([]);
    let [productList,setproductList]=useState([])
    return <UserContext.Provider value={({userList, setuserList}, {productList, setproductList})}>
        {children}
    </UserContext.Provider>
}