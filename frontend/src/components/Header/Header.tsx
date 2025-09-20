import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className=" bg-gradient-to-b from-amber-50 to-amber-200 p-3 junius-irish text-[25px]">
      <ul className="flex justify-around">
        <Link to="/"><li className="hover:scale-125 duration-200">Home</li></Link>
        <Link to="/categories"><li className="hover:scale-125 duration-200">Categorías</li></Link>
        <Link to="/random-beer"><li className="hover:scale-125 duration-200">Cerveza random</li></Link>
      </ul>
    </nav>
  )
}

export default Header