
import s from './description.module.scss'
import { desc } from '@/helpers/footer-bottom.data'

const Description: React.FC = () => {
	return (
		<div className={s.description}>
			{desc.map((desc, index) => (
				<p key={index} className={s.descTitle}>
					{desc.title}
				</p>
			))}
			{desc.map((desc, index) => (
				<p key={index} className={s.text}>
					{desc.text}
				</p>
			))}
		</div>
	)
}
export default Description
