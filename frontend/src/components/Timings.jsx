import { useEffect, useState } from "react"

import axios from "axios";
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { BottomWarning } from "../components/BottomWarning"



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
        
        <div > 
                <br />
                {/* <div className="my-2 ">

                    <input onChange={(e) => {
                        const s=e.target.value.toUpperCase();
                        setSource(s)
                    }} type="text" placeholder="source" className="bg-slate-100 w-full px-2 py-1 border rounded border-slate-200"></input>
                   

                    <input onChange={(e) => {
                        setDestination(e.target.value.toUpperCase())
                    }} type="text" placeholder="destination" className="bg-slate-100 w-full px-2 py-1 border rounded border-slate-200"></input>

                </div> */}

                    <div className="  flex justify-center">
                        <div className="flex flex-col justify-center">
                        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                            <Heading label={"BUS Timings"} />
                            <SubHeading label={"Enter Source and Destination to get timings"} />

                            <InputBox onChange={(e) => {
                                    const s=e.target.value.toUpperCase();
                                    setSource(s)
                                }} placeholder="Katpadi" label={"Source"} />

                            <InputBox onChange={(e) => {
                                    setDestination(e.target.value.toUpperCase())
                                }} placeholder="Bagayam" label={"Destination"} />

                            <div className="pt-4">
                            
                            </div>

                            
                        </div>
                        </div>
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
    return <div className="flex justify-between ">
        <div className="flex ">
           
            <div className="flex flex-col justify-center h-ful">
                <div className="flex justify-center">
                    {user.id}--
                    {user.Source}---&gt;
                    {user.Depature}<br />
                    {user.Source_Time} ---&gt;
                    {user.Depature_Time}
                    
                </div>
                <br />
            </div>
        </div>


    </div>
}