import React from 'react';

import LeftArrow from '../assets/icon-arrow-left.svg';
import RightArrow from '../assets/icon-arrow-right.svg';

type CarouselProps = {
	ImageURLs: string[];
};

const Carousel = ({ ImageURLs }: CarouselProps) => {
	const [previousImageIndex, setPreviousImageIndex] = React.useState(1);
	const [currantImageIndex, setCurrantImageIndex] = React.useState(2);
	const [nextImageIndex, setNextImageIndex] = React.useState(3);

	function goLeft() {
		setNextImageIndex(currantImageIndex);
		setCurrantImageIndex(previousImageIndex);

		setPreviousImageIndex((index) => {
			if (index === 0) {
				return ImageURLs.length - 1;
			}
			return index - 1;
		});
	}

	function goRight() {
		setPreviousImageIndex(currantImageIndex);
		setCurrantImageIndex(nextImageIndex);

		setNextImageIndex((index) => {
			if (index === ImageURLs.length - 1) {
				return 0;
			}
			return index + 1;
		});
	}

	return (
		<>
			<div className='flex flex-col gap-8 md:gap-14  '>
				<h2 className='text-center text-heading-1-5 md:text-heading-2'>
					My Work
				</h2>
				<div className=' overflow-x-clip '>
					<div className='flex gap-8 w-auto justify-center'>
						<img
							className='h-44 rounded-lg md:h-[22.5rem]'
							src={ImageURLs[previousImageIndex]}
							alt=''
						/>
						<img
							className='h-44 rounded-lg md:h-[22.5rem]'
							src={ImageURLs[currantImageIndex]}
							alt=''
						/>
						<img
							className='h-44 rounded-lg md:h-[22.5rem]'
							src={ImageURLs[nextImageIndex]}
							alt=''
						/>
					</div>
				</div>
				<div className='flex gap-8 justify-center'>
					<div
						className='size-16 bg-jet-black text-pale-cream text-button-0-875 rounded-full hover:bg-deep-purple flex'
						onClick={goLeft}>
						<img
							className='h-4 m-auto'
							src={LeftArrow.src}
							alt='left-arrow'
						/>
					</div>
					<div
						className='size-16 bg-jet-black text-pale-cream text-button-0-875 rounded-full hover:bg-deep-purple flex'
						onClick={goRight}>
						<img
							className='h-4 m-auto'
							src={RightArrow.src}
							alt='right-arrow'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Carousel;
