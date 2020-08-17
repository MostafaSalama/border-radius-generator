import React, {useContext} from 'react' ;
import BorderContext from "../app-context";
import PropTypes from 'prop-types' ;

function InputRange({index}) {
        const {updateBorderAtIndex} = useContext(BorderContext);
        function handleChange(e) {
            const {value} = e.target ;
                updateBorderAtIndex(index, `${value}%`)
        }
        return (
            <label>
                <input type='range' min='0' max='100' onChange={handleChange}/>
            </label>
        )
}
InputRange.propTypes = {
    index: PropTypes.number.isRequired
}
export default InputRange ;
