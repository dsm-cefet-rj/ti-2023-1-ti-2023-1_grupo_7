import React, { useState } from "react";
import '../../styles/Quiz.css'



export default (props) =>{
    return(
        <div className="questionario" style={{margin:'auto'}}>
            <label style={{marginRight:'20px'}}>
                1
                <input required type="radio" style={{marginLeft:'5px'}} name={props.name} value={1} onChange={(e) => props.setValue(e.target.value)}/>
            </label>
            <label style={{marginRight:'20px'}}>
                2
                <input required type="radio" style={{marginLeft:'5px'}} name={props.name} value={2} onChange={(e) => props.setValue(e.target.value)}/>
            </label>
            <label style={{marginRight:'20px'}}>
                3
                <input required type="radio" style={{marginLeft:'5px'}} name={props.name} value={3} onChange={(e) => props.setValue(e.target.value)}/>
            </label>
            <label style={{marginRight:'20px'}}>
                4
                <input required type="radio" style={{marginLeft:'5px'}} name={props.name} value={4} onChange={(e) => props.setValue(e.target.value)}/>
            </label>
            <label style={{marginRight:'20px'}}>
                5
                <input required type="radio" style={{marginLeft:'5px'}} name={props.name} value={5} onChange={(e) => props.setValue(e.target.value)}/>
            </label>
        </div>
    )
}