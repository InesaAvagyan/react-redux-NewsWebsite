import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { selectData } from "../../store/slices/data/data"
 
import '../Posts/Post.css'

const InitialPosts = () => {
    const params = useParams()

    const navigate = useNavigate()

    const data = useSelector(selectData).currentNews

    const currentPost = data.find(el => el.source.name === params.blogId)

    return(
        <>
            {currentPost ? 
                <div className="post-container">
                <div className="img-box">
                    {currentPost.urlToImage ? <img src={currentPost.urlToImage} alt="" /> : ''}
                </div>
                <div className="about-box">
                   {currentPost.source.name ? <h1>{currentPost.source.name}</h1> : "" } 
                   <hr/>
                    <h3>{currentPost.description}</h3>
                    <h3>{currentPost.content}</h3>
                    <p> Author: {currentPost.author}</p>
                    <button className="btn" onClick={() => navigate(-1)}><FontAwesomeIcon icon={faChevronLeft}/></button>
                </div>
                </div> : ''}
        </>
    )
}
export default InitialPosts