import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchData, selectData } from "../../store/slices/data/data"

import "./Post.css"


const Posts = () => {
    const data = useSelector(selectData).currentNews

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData('general'))
    }, [])

    console.log(data);

    return(
        <div className="container">            
        {
            data ? data.map((el, index) => (
                <div className="news" key={index}>
                    <div className="img-box">
                        {el.urlToImage ? <img src={el.urlToImage} alt="" /> : ""}
                    </div>
                    <div className="about-box">
                        {el.source.name ? <h1>{el.source.name}</h1> : '' }
                        <hr/>
                        <h3>{el.title}</h3>
                        <p> Author: {el.author}</p>
                        <p>Published at: {el.publishedAt}</p>
                        <Link to={'/' + el.source.name}>Read more...</Link>
                    </div>
                </div>
                )) : ''
            }
        </div>

    )
}

export default Posts