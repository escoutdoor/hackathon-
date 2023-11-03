import { NextPage } from 'next'
import s from './loading.module.scss'
import Image from 'next/image'

const Loading: NextPage = () => {
	return (
		<div className={s.loading}>
			<Image
				src={'/images/loading/loading.gif'}
				width={0}
				height={0}
				sizes="100vw"
				alt="loading"
			/>
		</div>
	)
}

export default Loading
