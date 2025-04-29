// pages/Notfound/Notfound.tsx

import { Link } from  'react-router-dom'
export function Notfound(){
    return(
        <div>
            <h1>Ops essa página não existe!</h1>

            <Link to="/home">Volte para Home</Link>
        </div>
    )
}