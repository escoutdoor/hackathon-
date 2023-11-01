import { FC } from 'react'
import s from './info.module.scss'
import { privacyData } from '@/helpers/info-page.content.data'

const Info: FC<{ page: string }> = ({ page }) => {
	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				{page === 'privacy' &&
					privacyData &&
					privacyData.map((item, index) => {
						let classToUse = ''
						if (item.type === 'title') {
							classToUse = s.title
						} else if (item.type === 'text') {
							classToUse = s.text
						} else if (item.type === 'preTitle') {
							classToUse = s.preTitle
						} else if (item.type === 'list') {
							classToUse = s.list
						}

						return item.type === 'list' && item.items ? (
							<ol className={s.list} key={index}>
								{item.items.map((listItem, index) => (
									<li key={index} className={s.text}>
										{listItem}
									</li>
								))}
							</ol>
						) : (
							<div key={index} className={classToUse}>
								{item.content}
							</div>
						)
					})}
			</div>
		</div>
	)
}
export default Info
