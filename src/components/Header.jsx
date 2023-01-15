import React from 'react';
import headerBackground from '../assets/img/headerBackground.png';
import browser from '../assets/img/browser.png';
import { BsArrowRightShort } from 'react-icons/bs';
function Header() {
	return (
		<div
			className='h-[75vh] w-full '
			style={{
				backgroundImage: `url(${headerBackground})`,
				backgroundPosition: 'center center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}>
			<div className='container flex flex-col items-center justify-center pt-20 mx-auto '>
				<h2 className='text-[40px] font-bold w-[100%] md:w-[50%] px-5 md:px-0 text-center  mt-20'>
					Single Dashboard for All your Business{' '}
					<span className='text-mainColor'>Needs</span>
				</h2>
				<button className='flex items-center px-10 py-3 mt-10 rounded-lg bg-lightColor'>
					Get Start
					<BsArrowRightShort className='text-2xl text-mainColor' />
				</button>
				<div>
					<img src={browser} alt='' className='' />
				</div>
			</div>
		</div>
	);
}

export default Header;
