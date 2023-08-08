import { useState } from 'react'
import logo from "../assets/logo.svg"
import close from "../assets/icon-close.svg"
import hamburguesa from "../assets/icon-hamburger.svg"

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toogleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            {/* nav */}

            <nav className='md:flex hidden px-28 pt-10 items-center justify-between'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <ul>
                    <li className='flex gap-6 '>
                        <a className='font-bold border-b-2 border-transparent hover:border-black duration-300' href="">PRODUCT</a>
                        <a className='font-bold border-b-2 border-transparent hover:border-black duration-300' href="">FEATURES</a>
                        <a className='font-bold border-b-2 border-transparent hover:border-black duration-300' href="">PRICING</a>
                        <a className='font-bold text-[#8F939C] text-opacity-70 ml-14 border-b-2 border-transparent hover:border-black duration-300' href="">LOGIN</a>
                    </li>
                </ul>

            </nav>
            <div className='md:hidden flex justify-between items-center py-8 px-8'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div onClick={toogleNavbar}>
                    {isOpen ? <img src={close} alt="" /> : <img src={hamburguesa} alt="" />}
                </div>
            </div>

            {isOpen && (
                <div className='w-3/5 bg-white ml-16 fixed' >
                    <div className='flex flex-col shadow-2xl items-center gap-6 py-6'>
                        <a className='font-bold' href="">PRODUCT</a>
                        <a className='font-bold' href="">FEATURES</a>
                        <a className='font-bold' href="">PRICING</a>
                        <a className='font-bold text-[#8F939C] text-opacity-70 md:pl-14' href="">LOGIN</a>
                    </div>
                </div>
            )}
            {/* seccion 2 */}
        </>
    )
}

export default Nav
