import { IFooterBottomDesc } from '@/interfaces/footer-bottom';
import s from './description.module.scss'
import { desc } from '@/helpers/footer-bottom';

const Description:React.FC = () => {
	
	return (
		<div className={s.description}>
			{desc.map((desc) => 
				<p className={s.descTitle}>{desc.title}</p>)}
				{desc.map((desc) => 
				<p className={s.text}>{desc.text}</p>)}
		</div>
	)
}
export default Description;