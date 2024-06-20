import React from "react";

export default function User({ userInfo, onClick }) {
    
    return(
        <>
            <tr>
                <td>{userInfo.username}</td>
                <td>{userInfo.role}</td>
                <td><button onClick={onClick}>X</button></td>
            </tr>
        </>
    )
}