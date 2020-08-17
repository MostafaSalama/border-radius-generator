import React, {useContext} from 'react' ;
import BorderContext from "../app-context";
import style from './BorderBoxTest.module.css' ;
const BorderBoxText = ()=>{
    const {borderValues } = useContext(BorderContext);
    return (
      <div className={style.container}>
          <blockquote className={style.quote}>
              <p><span className={style.text}>border-radius</span>: {borderValues.join(' ')};</p>
          </blockquote>
      </div>
    )
}

export default BorderBoxText ;
