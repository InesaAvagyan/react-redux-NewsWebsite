import logo from '../../logo/logo.png'
import { useDispatch, useSelector } from "react-redux"
import { selectInputText, typeText } from "../../store/slices/InputSlice/inputSlice"
import { useCallback } from "react"
import { fetchData } from "../../store/slices/data/data"
import "./Navbar.css"




const Navbar = () => {

    const inputText = useSelector(selectInputText)

    const dispatch = useDispatch()

    const onSubmitHandler = useCallback((e) => {
        e.preventDefault()
        dispatch(fetchData(inputText))
        dispatch(typeText(''))
    })

    return(
        <div className="navbar-container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navbar-right">
                <ul className="navigation">
                    <li onClick={() => dispatch(fetchData('general'))}>Home</li>
                    <li onClick={() => dispatch(fetchData('health'))}>Health</li>
                    <li onClick={() => dispatch(fetchData('sport'))}>Sport</li>
                    <li onClick={() => dispatch(fetchData('politics'))}>Politics</li>
                </ul>

            </div>
            <div className="input-bar">
                <form onSubmit={(e) => onSubmitHandler(e)}>
                    <input 
                    type="text" 
                    onChange={(e) => dispatch(typeText(e.target.value))}
                    value={inputText}
                    placeholder= 'Search for news...'
                    />
                </form>
                
            </div>

        </div>
    )
}

export default Navbar