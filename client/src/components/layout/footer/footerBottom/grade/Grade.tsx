import Link from 'next/link';
import Image from 'next/image'
import s from './grade.module.scss'
import {FaStar} from 'react-icons/fa'

const Grade:React.FC = () => {

	return (
		<div className={s.gradeWrap}>
			<div className={s.gradeBlocks}>
				<div className={s.block}>
					<Link
							href={'/apple-store'}
							className={s.appStoreLink}
						>
							<Image
								width={135}
								height={45}
								src={'/images/img/footer/apple.png'}
								alt="img"
							/>
					</Link>
					<div className={s.content}>
						<div className={s.contentBlock}>
							<p className={s.sum}>4.8</p>
							<div className={s.iconWrap}>
								<FaStar className={s.icon}/>
								<FaStar className={s.icon}/>
								<FaStar className={s.icon}/>
								<FaStar className={s.icon}/>
								<FaStar className={s.icon}/>
							</div>
						</div>
						<p className={s.amount}>32.6K ratings</p>
					</div>
				</div>

				<div className={s.block}>
						<Link
								href={'/google-play'}
								className={s.googlePlayLink}
							>
							<Image
								width={135}
								height={35}
								alt="img"
								src={'/images/img/footer/Google_Play.png'}
							/>
						</Link>
					<div className={s.content}>
						<div className={s.contentBlock}>
							<p className={s.sum}>4.8</p>
							<div className={s.iconWrap}>
								<FaStar className={s.icon}/>
								<FaStar className={s.icon}/>
								<FaStar className={s.icon}/>
								<FaStar className={s.icon}/>
								<FaStar className={s.icon}/>
							</div>
						</div>
						<p className={s.amount}>32.6K ratings</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Grade;