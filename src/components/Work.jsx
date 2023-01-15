import React from 'react';
import profile from '../assets/img/moreIcon.svg';
import moreImage from '../assets/img/peopleMore.png';
import { BiRightArrowAlt } from 'react-icons/bi';

// images
import figma from '../assets/img/figma.svg';
import photoshop from '../assets/img/photoshop.svg';
import xd from '../assets/img/xd.svg';
import designImg from '../assets/img/design.png';
import map from '../assets/img/map.png';
import diagram from '../assets/img/diagram.png';
import photo from '../assets/icons/image.png';
import video from '../assets/icons/video.png';
import music from '../assets/icons/music.png';
import gif from '../assets/icons/gif.png';
function Work() {
	let images = [figma, photoshop, xd];
	let downImages = [photo, video, music, gif];

	return (
		<div className='h-full py-20 bg-lightColor'>
			<div className='container w-full h-full mx-auto'>
				<div className='flex flex-wrap items-center gap-5 px-5 md:flex-nowrap md:px-0'>
					<div className='w-[100%] md:w-[50%] text-center md:text-left '>
						<h2 className='text-[50px] font-bold'>
							Work <span className='text-mainColor'>More Easily</span>
						</h2>
						<h2 className='text-[50px] font-bold'>With Everyone</h2>
						<p className='text-textColor'>
							Lorem Ipsum is simply dummy text of the typesetting
							industry. Lorem Ipsum has been the industry's standatext
							ever since when an unknown printer.
						</p>
					</div>
					<div className='flex items-center bg-darkColor w-[100%] md:w-[50%] rounded-[30px] h-[220px]'>
						<div className='w-[50%] flex flex-col items-center gap-5'>
							<div className='w-[60px] h-[60px] flex items-center justify-center  rounded-full bg-textColor'>
								<img src={profile} alt='' />
							</div>
							<p className='text-2xl font-bold text-center text-lightColor'>
								Work From <br /> Anyware
							</p>
						</div>
						<img
							className='w-[50%] h-full object-cover rounded-tr-[30px] rounded-br-[30px]'
							src={moreImage}
							alt=''
						/>
					</div>
				</div>
				{/* drugi section */}
				<div className='flex flex-wrap items-center justify-center gap-5 px-5 mt-5 md:px-0 md:flex-nowrap'>
					{/* prva kartica */}
					<div className='h-full md:grow-0 md:h-[300px] md:w-auto bg-[#fff] rounded-[20px] p-5 flex flex-col justify-center items-center text-center md:text-left md:items-start '>
						<p className='text-[35px] font-bold'>
							Importan <br /> Tools
						</p>
						<div className='flex gap-5'>
							{images.map((src, index) => {
								return (
									<div
										key={index}
										className='w-[80px] h-[80px] bg-lightColor  rounded-xl flex items-center justify-center'>
										<img src={src} alt='' />
									</div>
								);
							})}
						</div>
					</div>
					{/* druga kartica */}
					<div className='flex  h-full md:h-[300px] flex-wrap justify-center text-center items-center bg-[#fff] p-5 rounded-[20px] h-full md:text-left md:flex-nowrap'>
						<div>
							<p className='font-bold text-mainColor text-[35px]'>
								Support For Responsive Device
							</p>
							<button className='flex text-[22px] mt-5 items-center mx-auto  font-bold md:mx-0 '>
								Get Started{' '}
								<BiRightArrowAlt className='text-2xl text-mainColor' />
							</button>
						</div>
						<img
							src={designImg}
							alt=''
							className='object-cover w-[100%] md:w-[50%] '
						/>
					</div>
					{/* treca kartica */}
					<div className='p-5 bg-[#fff] rounded-[20px] h-full md:h-[300px] w-full md:w-[50%] flex items-center flex-col gap-5'>
						<img src={map} alt='map' />
						<p className='text-[18px] text-textColor text-center'>
							Monitor Growth
						</p>
					</div>
				</div>
				{/* treci section */}
				<div className='flex flex-wrap items-center justify-center w-full gap-5 px-5 mt-5 lg:justify-start md:px-0 lg:flex-nowrap '>
					{/* prvi section */}
					<div className=' flex items-center bg-darkColor w-full lg:w-[70%] h-[300px] rounded-[30px] gap-5'>
						<img
							src={diagram}
							alt=''
							className=' h-full w-[60%] lg:w-[70%] xl:w-full rounded-tl-[30px] rounded-bl-[30px]'
						/>
						<div className='w-[30%] flex flex-col items-center justify-center text-center'>
							<p className='text-[#fff]'>Watch and Learn</p>
							<button className='text-[#fff] bg-mainColor px-5 py-2 rounded-lg'>
								Join Spaatz
							</button>
						</div>
					</div>

					{/* drugi section */}
					<div className='bg-[#fff] h-[300px] p-5 rounded-[30px] lg:w-[30%] flex flex-col gap-5 justify-center'>
						<p className='text-[35px] font-bold'>
							Image, Video, Audio Gif, support
						</p>
						<div className='flex gap-5'>
							{downImages.map((img, i) => {
								return (
									<div
										key={i}
										className='w-[70px] h-[70px] bg-lightColor rounded-[20px] flex items-center justify-center'>
										<img src={img} alt='' />
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Work;
