import { useEffect, useState } from "react"

import axios from "axios";



export const Timings = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
   
    const [source,setSource]=useState("");
    const [destination,setDestination]=useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/Timings/bus/?source="+source+"&destination="+destination)
            .then(response => {
                setUsers(response.data.timings)
            })
    }, [source,destination])

    return <div >
        <div className="font-bold mt-6 text-lg bg-slate-200 ">
            BUS Timings...
        </div>
        <div > 
                <br />
                <div className="my-2 ">

                    <input onChange={(e) => {
                        const s=e.target.value.toUpperCase();
                        setSource(s)
                    }} type="text" placeholder="source" className="bg-slate-100 w-full px-2 py-1 border rounded border-slate-200"></input>
                   

                    <input onChange={(e) => {
                        setDestination(e.target.value.toUpperCase())
                    }} type="text" placeholder="destination" className="bg-slate-100 w-full px-2 py-1 border rounded border-slate-200"></input>

                </div>
                <br />
                </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </div>
}

function User({user}) {
    
    //className="bg-slate-300 h-screen"
    return <div className="flex justify-between bg-slate-300">
        <div className="flex bg-slate-300">
           
            <div className="flex flex-col justify-center h-ful">
                <div >
                    {user.id}--
                    {user.Source}---&gt;
                    {user.Depature}<br />
                    &nbsp  {user.Source_Time} ---&gt;
                    {user.Depature_Time}
                    
                </div>
                <br />
            </div>
        </div>


    </div>
}