import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/icons/logo.png';
import { FcSearch } from 'react-icons/fc';
function Navbar() {
	return (
		<div className='absolute top-0 left-0 right-0'>
			<div className='container z-10 flex items-center justify-between w-full pt-5 mx-auto'>
				<div className='flex items-center font-[700] text-[25px] md:text-[30px]'>
					<img src={Logo} alt='' />
					<h1 className='ml-2'>Spaatz</h1>
				</div>
				<div className='hidden gap-2 md:flex'>
					<NavLink
						className='rounded-lg md:py-1 md:px-3 xl:py-2 xl:px-5 hover:bg-mainColor/25'
						to='/'>
						Showcase
					</NavLink>
					<NavLink
						className='rounded-lg md:py-1 md:px-3 xl:py-2 xl:px-5 hover:bg-mainColor/25'
						to='/mobile'>
						Mobile Version
					</NavLink>
					<NavLink
						className='rounded-lg md:py-1 md:px-3 xl:py-2 xl:px-5 hover:bg-mainColor/25'
						to='/licence'>
						Licence
					</NavLink>
					<NavLink
						className='rounded-lg md:py-1 md:px-3 xl:py-2 xl:px-5 hover:bg-mainColor/25'
						to='/blog'>
						Blog
					</NavLink>
					<NavLink
						className='rounded-lg md:py-1 md:px-3 xl:py-2 xl:px-5 hover:bg-mainColor/25'
						to='/contact'>
						Contact
					</NavLink>
				</div>
				<div className='flex items-center gap-x-2'>
					{/* must create page for sign up */}
					<div className='items-center hidden gap-2 lg:flex'>
						<input
							className='bg-mainColor/0 focus:bg-[#fff]'
							type='text'
							id='search'
						/>
						<label htmlFor='search'>
							<FcSearch className='text-2xl' />
						</label>
					</div>
					<NavLink
						to='/test'
						className='px-5 py-2 text-lightColor rounded-xl bg-darkColor'>
						Sign Up
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
