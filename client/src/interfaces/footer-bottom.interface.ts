import { IconType } from 'react-icons'

export interface IFooterBottomItem {
	id: number
	href: string
}
export interface IFooterBottomLink {
	id: number
	text: string
	href: string
}
export interface IFooterBottomDesc {
	title: string
	text: string
}

export interface IFooterIcon {
	id: number
	Icon: IconType
	href: string
}
