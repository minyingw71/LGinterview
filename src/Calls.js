import React from "react"
import Call from './Call'

import {MdOutlineCallMissed} from 'react-icons/bs'
import {VscCallIncoming} from 'react-icons/bs'
import {BsVoicemail} from 'react-icons/bs'

const Calls = (calls)=>{
    return (<div>
        
        {
            calls['calls'].map(call=>{
                const {id, created_at, direction, from, to, via, duration, call_type} = call
                
                return (
                <div>
                    {/* {call.call_type==='missed' ? (<MdOutlineCallMissed key={id}/>) :call.call_type==='answered'?(<VscCallIncoming  key={id}/>):(<BsVoicemail  key={id}/>)} */}
                    <Call key={id} id={id} created_at={created_at} direction={direction} from={from} to={to} via={via} duration={duration} call_type={call_type}/>
                </div>
                
                // <Call key={id} id={id} created_at={created_at} direction={direction} from={from} to={to} via={via} duration={duration} call_type={call_type}/>
                
                )

            
            })
        }

    </div>
)
}

export default Calls