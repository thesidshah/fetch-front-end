import { Link  } from "react-router-dom";
const Header = ({
    heading,
    paragraph,
    linkName,
    linkUrl='#'
}) => {
    /*
        * Logged in user should have a log out button.
        * Search bar is mandatory -duh
        * Fetch logo? Or add my name as the logo
        * 
    */
    return(
        <div className="mb-10">
        <div className="flex justify-center">
            <img 
                alt=""
                className="h-14 w-14"
                src="https://asset.brandfetch.io/id7Cm60rQf/idetOx4h9a.svg"/>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {heading}
        </h2>
      
    </div>
)
/*
Removed the following code since I am not including a sign up functionality
  <p className="mt-2 text-center text-sm text-gray-600 mt-5">
        {paragraph} {' '}
        <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
            {linkName}
        </Link>
        </p>

*/
}
export default Header;