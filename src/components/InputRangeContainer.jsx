import React from 'react' ;
import InputRange from "./InputRange";
import style from './InputRangeContainer.module.css'
const InputRangeContainer = ()=>{
    return (
        <div className={style.container}>
            <InputRange index={0} key={0}/>
            <InputRange index={1} key={1}/>
            <InputRange index={2} key={2}/>
            <InputRange index={3} key={3}/>
        </div>
    )
}
export default InputRangeContainer ;
