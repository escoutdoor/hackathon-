import Link from 'next/link';
import s from './body.module.scss'
import  Form  from './form/Form';

const Body:React.FC = () => {
	
	return (
		<div className={s.block}>
			<div className={s.form}> 
				<div className={s.input}>
						<div className={s.block}>
							<input type='file'/>
						</div>
				</div>
					<Form/>
				<div className={s.about}>
					<p>This is your profile information. Privacy of our users information is very important to us, if you have any concerns about how your data will be used, please check our 
						<Link href={'./privacy policy'} className={s.link}> Privacy Policy</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
export default Body;