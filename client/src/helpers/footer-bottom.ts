import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { IFooterBottomDesc, IFooterBottomItem, IFooterBottomLink } from './../interfaces/footer-bottom';
import { SiTiktok } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';

export const icons = [
	FaInstagram,
	SiTiktok,
	FaTwitter,
	BsYoutube
]
export const footerBottomIcon: IFooterBottomItem[] = [
	{
		id: 1,
		href: '/instagram'
	},
	{
		id: 2,
		href: '/tikTok'
	},
	{
		id: 3,
		href: '/twitter'
	},
	{
		id: 4,
		href: '/youtube'
	},
]
export const footerBottomLink: IFooterBottomLink[] = [
	{
		id: 1,
		text: 'Advertise',
		href: '/advertise',
	},
	{
		id: 2,
		text: 'Careers',
		href: '/careers',
	},
	{
		id: 3,
		text: 'Student Verification',
		href: '/student-verification',
	},
	{
		id: 4,
		text: 'Student Research',
		href: '/student-research',
	},
]
export const desc: IFooterBottomDesc[] = [
	{
		title: 'Where To Find Us',
		text: 'Student Beans is operated by The Beans Group. Registered in England and Wales under company number 5486885.Registered office 1 Vincent Square, London, SW1 2PN.'
	}
]