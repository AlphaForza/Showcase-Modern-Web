import React from 'react';
import powerImage from '../assets/img/powerImg.png';
import diamond from '../assets/icons/diamond.png';
import lock from '../assets/icons/lock.png';
import fasteMeter from '../assets/img/fasteMeter.png';

function PowerfulSection() {
	let items = [
		{
			img: diamond,
			title: 'All-in-One Platform',
			desc: 'Lorem Ipsum is simply dummy',
			color: '#FED8FF',
		},
		{
			img: lock,
			title: 'Concrete Security',
			desc: 'Lorem Printing Industry',
			color: '#C4F5C9',
		},
	];
	return (
		<div className='container mx-auto mt-60 xl:mt-[500px] h-full w-full pb-20 '>
			<div className='flex flex-col items-center justify-between gap-10 md:flex-row'>
				<div className='w-[100%] lg:w-[50%] px-5 text-center md:text-left'>
					<h3 className='font-[900] text-[55px]'>
						Lightning Fast <br /> & Super{' '}
						<span className='text-mainColor'>Powerful</span>
					</h3>
					<p className='text-textColor'>
						Lorem Ipsum is simply dummy text of the typesetting
						industry. Lorem Ipsum has been the industry's standatext
						ever since when an unknown printer.
					</p>
					{items.map((el, index) => {
						return (
							<div
								className='flex items-center gap-5 mt-5'
								key={index}>
								<div
									className='w-[90px] h-[90px] flex items-center justify-center rounded-lg '
									style={{ backgroundColor: el.color }}>
									<img src={el.img} alt={el.title} />
								</div>
								<div>
									<h2 className='text-[30px] font-[700]'>
										{el.title}
									</h2>
									<p className='text-textColor'>{el.desc}</p>
								</div>
							</div>
						);
					})}
				</div>
				<div className='w-[100%] lg:w-[50%] flex justify-center relative'>
					<img src={powerImage} alt='' className='w-[80%]' />
					<div className='hidden md:flex absolute bottom-[-25px] left-[-15%]'>
						<img src={fasteMeter} alt='' className='w-[70%]' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default PowerfulSection;
