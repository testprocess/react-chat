import MainLogo from '../logo.svg'

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded fixed inset-x-0 top-0">
    <div className="flex flex-wrap items-center justify-between mx-auto">
    <a href="/" className="flex items-center">
        <img src={MainLogo}  className="h-4 mr-6 sm:h-8" alt="Flowbite Logo" />
    </a>

    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
        <li>
            <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Home</a>
        </li>
        <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Services</a>
        </li>
        <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</a>
        </li>
        </ul>
    </div>
    </div>
    </nav>
  );
}

export default Navbar;
