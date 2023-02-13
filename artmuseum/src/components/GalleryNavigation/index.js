import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";


const GalleryNavigation = props => {
    console.log(props);
    return (
        <nav>
            <NavLink to="/">Return to Homepage<br/></NavLink>
            {props.galleries.map(gallery => (
            <NavLink to={`/galleries/${gallery.id}`} className="galleryName">{gallery.name}<br/></NavLink>   
            ))}
        </nav>
    )
}

export default GalleryNavigation;