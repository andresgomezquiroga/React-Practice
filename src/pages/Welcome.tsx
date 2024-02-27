import { Link } from "react-router-dom"

const Welcome = () => {
  return (
<header className="border-b border-gray-700 text-white py-4 bg-gray-900"> {/* Cambiado el color del borde, el fondo y el texto */}
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
      <h1 className="text-2xl font-bold text-white">APP Practice</h1> {/* Cambiado el color del texto a blanco */}
    </div>
    <nav className="space-x-4">
      <Link to='/login' className="text-white hover:text-gray-400">Login</Link> {/* Cambiado el color del texto y del hover */}
      <Link to='/register' className="text-white hover:text-gray-400">Register</Link> {/* Cambiado el color del texto y del hover */}
      <Link to='/dashboard' className="text-white hover:text-gray-400">Customers</Link> {/* Cambiado el color del texto y del hover */}
    </nav>
  </div>
</header>
  )
}

export default Welcome