import React from 'react';
import stars from '../assets/img/star.png';
import allStars from '../assets/img/allStars.svg';
import mainProfil from '../assets/img/originalProfile.jpg';
import profile1 from '../assets/img/profil1.png';
import profile2 from '../assets/img/profile2.png';
import profile3 from '../assets/img/profile3.png';

function Feedback() {
	let users = [
		{
			name: 'Mincya Park',
			job: 'Front-End Developer',
			img: profile1,
		},
		{
			name: 'Daniel Serrano',
			job: 'Senior Designer',
			img: profile2,
		},
		{
			name: 'Tihomir Milenkovic',
			job: 'Full-Stack Developer',
			img: profile3,
		},
	];
	return (
		<div className='bg-darkColor py-[50px]'>
			<div className='container px-5 mx-auto'>
				<div className='flex items-center gap-5'>
					<h2 className='text-lightColor text-[65px] font-bold'>
						Feedback
					</h2>
					<img src={stars} alt='' />
				</div>
				{/*  text */}
				<div className='flex flex-wrap items-center justify-center gap-5 lg:justify-between lg:flex-nowrap'>
					<div className='w-[100%] lg:w-[50%]'>
						<p className='text-textColor text-[25px]'>
							<span className='font-bold text-lightColor'>
								“We were amazed at how easy
							</span>{' '}
							it was to make our{' '}
							<span className='text-[#FFAD32]'>Yozgat</span> in a few
							hours without knowing how to code, and at how the
							Software has modernized our{' '}
							<span className='font-bold text-lightColor'>
								Workflow
							</span>
							.”
						</p>

						<p className='mt-10 font-bold text-lightColor'>
							TeleTech
						</p>
						<span className='my-5 text-textColor'>
							(4.5/5 Rating)
						</span>
						<img
							src={allStars}
							alt=''
							className='w-[30%] lg:w-[20%]'
						/>
					</div>
					<img
						src={mainProfil}
						className='w-[70%] lg:w-[30%] rounded-[20px]'
						alt=''
					/>
				</div>
				<hr className='my-5 text-lightColor' />
				<div className='flex flex-col w-full gap-5 lg:flex-row lg:items-center lg:justify-between'>
					{users.map((el, index) => {
						return (
							<div
								key={index}
								className='flex gap-5 hover:bg-[#283343] hover:rounded-[20px] p-2 w-full ease-in-out duration-500'>
								<img className='rounded-full' src={el.img} alt='' />
								<div>
									<p className='font-bold text-lightColor'>
										{el.name}
									</p>
									<p className='text-textColor '>{el.job}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Feedback;
