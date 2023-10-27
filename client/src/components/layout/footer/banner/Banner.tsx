import s from './banner.module.scss'
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Banner: FC = () => {
	return (
		<div className={s.banner}>
			<div className={s.bannerWrap}>
				<div className={s.contentWrap}>
					<h2 className={s.title}>The app gives you more</h2>
					<h2 className={s.text}>
						Exclusive savings on the brands you love most
					</h2>

					<div className={s.buttons}>
						<button className={s.buttonLink}>
							<Link href="/learn-more" className={s.link}>
								Learn More
							</Link>
						</button>
						<div className={s.linksWrap}>
							<Link
								href={'/apple-store'}
								className={s.appStoreLink}
							>
								<Image
									width={135}
									height={45}
									src={'/images/img/apple.png'}
									alt="img"
								/>
							</Link>
							<Link
								href={'/google-play'}
								className={s.googlePlayLink}
							>
								<Image
									width={135}
									height={45}
									alt="img"
									src={'/images/img/Google_Play.png'}
								/>
							</Link>
						</div>
					</div>
				</div>
				<Image
					width={507}
					height={480}
					src={'/images/img/banner_app.png'}
					alt="img"
				/>
			</div>
		</div>
	)
}
export default Banner
