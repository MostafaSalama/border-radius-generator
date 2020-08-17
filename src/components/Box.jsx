import React, {useContext} from 'react';
import styles from './box.module.css'
import InputRange from "./InputRange";
import BorderContext from "../app-context";

const Box = ()=>{
    const {borderValues} = useContext(BorderContext) ;
    const borderRadius = borderValues.join(' ') ;
    console.log(borderRadius)
    return (
       <div className={styles.container}>
           <div className={styles.box} style={{borderRadius}}>
           </div>
       </div>
    )
}
export default Box ;
