import { useState } from "react";
const userList = ({id,name,email}) => {
  return (
    <div>
        
        <ul>
        
        {
            <>
            <li>{id}</li>
            <li>{name}</li>
            <li>{email}</li>
            </>
        }
        </ul>
        
      
    </div>
  )
}

export default userList;
