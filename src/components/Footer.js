import { Link } from "react-router-dom"
export const Footer = () => {
  return (


    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-2xl p-4 md:flex md:items-center md:justify-between ">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className=" text-gray-500 hover:underline">Flowbite™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-100 sm:mt-0">
          <li>
            <a href="https://twitter.com/asjad5968" target='_blank' className="hover:underline text-gray-700 dark:text-gray-100  hover:text-white me-4 md:me-6">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/asjad-ali-6800a4237/" target='_blank' className="hover:underline text-gray-700 dark:text-gray-100 hover:text-white me-4 md:me-6">LinkedIN</a>
          </li>
          <li>
            <a href="https://twitter.com/asjad5968" target='_blank' className="hover:underline text-gray-700 dark:text-gray-100 hover:text-white me-4 md:me-6">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/asjad5968" target='_blank' className="hover:underline text-gray-700 dark:text-gray-100 hover:text-white md:me-6">X</a>
          </li>
        </ul>
      </div>
    </footer>

  )
}
