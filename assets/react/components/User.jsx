import React from "react";

export default function User({ userInfo, onClick, onEdit }) {
    
    return(
        <>
            <tr>
                <td>{userInfo.username}</td>
                <td>{userInfo.role}</td>
                <td>
                    <button className="btn-edit" onClick={onEdit}>Modifier</button>
                    <button className="btn-delete" onClick={onClick}>X</button>
                </td>
            </tr>
        </>
    )
}