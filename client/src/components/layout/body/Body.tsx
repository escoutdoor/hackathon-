import Link from 'next/link';
import s from './body.module.scss'
import  Form  from './form/Form';
import Image from 'next/image';
import {IoMdAddCircle} from 'react-icons/io'

const Body:React.FC = () => {
	
	return (
		<div className={s.block}>
			<div className={s.form}> 
				<div className={s.upload}>
					<Image
					className={s.img}
					width={100}
					height={100}
					src={'/images/avatars/no-avatar.png'}
					alt='img'/>
					<div className={s.round}>
						<input type='file'/>
						<IoMdAddCircle className={s.icon}/>
					</div>
				</div>

					<Form/>
				<div className={s.about}>
					<p>This is your profile information. Privacy of our users information is very important to us, if you have any concerns about how your data will be used, please check our 
						<Link href={'/privacy policy'} className={s.link}> Privacy Policy</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
export default Body;