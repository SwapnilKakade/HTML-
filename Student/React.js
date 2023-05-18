import { useState } from "react"
import Graduate from "./Graduate"
import Pg from "./PG"
import Undergraduate from "./UnderGrad"
import './ex.css';
export default function React(){
         let[Name,setName]=useState("")
         let[Email,setEmail]=useState("")
         let[res,setRes]=useState("")

                return(
                    <div>
                     Name:<input  type="text" placeholder="Enter the name" onBlur={(e)=>{setName(e.target.value)}}/><br></br>
                     Email:<input type="email" placeholder="Enter the email" onBlur={(e)=>{setEmail(e.target.value)}}/><br></br>
                            <select onChange={(e)=>{setRes(e.target.value)}}>
                                <option value ="gd">Graduate</option>
                                <option value ="pg">PG</option>
                                <option value ="ug">Undergraduate</option>
                            </select><br></br>
                        <p>Name:{Name}</p>
                        <p>Email:{Email}</p>
                        {res==="gd"?<Graduate></Graduate>:""}
                        {res==="pg"? <Pg></Pg> :""}
                        {res==="ug"? <Undergraduate></Undergraduate>:""}
                    </div>
                )
        }
    

