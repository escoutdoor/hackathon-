import { footerIcons } from '@/helpers/footer-bottom.data'
import { FC } from 'react'
import s from './footer-icon.module.scss'
const FooterIcon: FC<{}> = ({}) => {
    return (
			<ul className={s.iconList}>
			{footerIcons.map(item => {
						const { Icon } = item
						return <Icon key={item.id} className={s.icon}/>
					})}
				</ul>
		)

}

export default FooterIcon
