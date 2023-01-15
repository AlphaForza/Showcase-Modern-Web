import React from 'react';
import packedg from '../assets/img/packedg.png';
function Packaged() {
	return (
		<div className='container mx-auto py-[50px]'>
			<h2 className=' font-bold text-center text-[65px]'>
				Packaged with amazing{' '}
				<span className='text-mainColor'>features</span>
			</h2>
			<div className='flex flex-col items-center w-full lg:flex-row'>
				<div className='flex flex-col flex-wrap gap-5 w-[90%] lg:w-[30%] mt-5'>
					<p className='font-bold text-textColor'>Insert Menu</p>
					<div className='rounded-[20px]  bg-darkColor p-5 flex flex-col w-[100%]'>
						<p className='text-[#fff] font-bold text-2xl'>
							New Versioned
						</p>
						<p className='py-2 text-lightColor'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Delectus, eveniet!
						</p>
						<button className='w-[50%] rounded-xl px-5 py-2 bg-mainColor text-[#fff]'>
							Update
						</button>
					</div>
					<p className='font-bold text-textColor'>
						First Class Design
					</p>
					<p className='font-bold text-textColor'>Token Support</p>
					<p className='font-bold text-textColor'>Smart Components</p>
				</div>
				<div className='w-[100%] lg:w-[70%] p-5'>
					<img src={packedg} alt='' />
				</div>
			</div>
		</div>
	);
}

export default Packaged;
