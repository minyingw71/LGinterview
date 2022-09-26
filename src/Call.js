import React from "react"
import { useState } from "react"
// import {Collapse} from 'antd'
import Collapsible from 'react-collapsible';
import {MdOutlineCallMissed} from 'react-icons/bs'

// const {Panel} = Collapse;
var tempDate = ""
const Call = ({id, created_at, direction, from, to, via, duration, call_type})=>{
    
    const date = new Date(created_at)
    var time = date.toLocaleTimeString()    //time
    var day = date.toLocaleDateString()     //date
    
    // const [isActive, setIsActive] = useState(false)
    

    return (
        <div>
        {/* tetsing */}
        <div className="date">
            <p>{tempDate != day ? (tempDate=day) : (null)}</p>
            {/* {tempDate != day ? (tempDate=day) : (null)} */}
            
        </div>
        {/* <div className="callDetail">
            
            {call_type === 'missed' ? (<p><MdOutlineCallMissed/></p>): call_type==='answered'? (<p><MdOutlineCallMissed/></p>):(<p><MdOutlineCallMissed/></p>)}
        </div> */}
        <Collapsible trigger={from} className='collapsible' openedClassName="collapsibleopen">
        
               
                <div>
                {direction === 'outbound' ?(<h4>Outgoing Call</h4>) : (<h4>Incoming Call</h4>)}
                
        
                <h1>Caller: {from}</h1>
                <p>To: {to}</p>
                <p>Call centre: {via}</p>
                <p>Duration: {duration} seconds</p>
                <p>Called on: {time}</p>
                <p>Call {call_type}</p>
                <button className="btn">Archive</button>
                </div>
        </Collapsible>
        
        
    </div>
    )
}

export default Call