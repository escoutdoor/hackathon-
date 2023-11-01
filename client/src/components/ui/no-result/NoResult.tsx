import s from './no-result.module.scss'
import { FC } from 'react'
import Image from 'next/image'

const NoResult: FC<{ message: string }> = ({ message }) => {
	return (
		<div className={s.no__result}>
			<Image
				src={'/images/img/discounts/no-result.png'}
				alt={'no results'}
				width={0}
				height={0}
				sizes={'100vw'}
				className={s.img}
			/>
			<span>{message}</span>
		</div>
	)
}

export default NoResult
