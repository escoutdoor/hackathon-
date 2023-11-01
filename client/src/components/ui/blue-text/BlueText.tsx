import s from './blue-text.module.scss'
import { FC, PropsWithChildren } from 'react'
import { TextProps } from '@/shared/interfaces/text.interface'

const BlueText: FC<PropsWithChildren<TextProps>> = ({ children }) => {
	return <p className={s.text}>{children}</p>
}

export default BlueText
