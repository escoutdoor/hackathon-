import { FC } from "react";
import Image from 'next/image'
import s from './banner.module.scss'
import img from '@/assets/img/banner_app.png'
import Link from "next/link";
import apple from '@/assets/img/apple.png'
import google from '@/assets/img/Google_Play.png'
const Banner:FC = () => {
	
	return (
		<div className={s.banner}>
			<div className={s.bannerWrap}>
				<div className={s.contentWrap}>
					<h2 className={s.title}>The app gives you more</h2>
					<h2 className={s.text}>Exclusive savings on the brands you love most</h2>
					
					<div className={s.buttons}>
						<button className={s.buttonLink}>
							<Link href="/learn-more" className={s.link}>Learn More</Link>
						</button>
						<div className={s.linksWrap}>
							<Link href={'/apple-store'} className={s.appStoreLink}>
									<Image 
									width={135}
									height={45}
									src={apple}
									alt="img"/>
								</Link>
								<Link href={'/google-play'} className={s.googlePlayLink}>
									<Image
										width={135}
										height={45}
										alt="img"
										src={google}/>
								</Link>
						</div>
					</div>
				</div>
				<Image 
					width={507}
					height={480}
					src={img}
					alt="img"
				/>
			</div>
			
		</div>
	)
}
export default Banner;