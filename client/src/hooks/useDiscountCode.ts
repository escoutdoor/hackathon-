'use client'
import emailjs from '@emailjs/browser'
import { useProfile } from './useProfile'
import { useRouter } from 'next/navigation'

interface IDiscountCode {
	discountCode: string
	discountName: string
	setIsLoading: (value: boolean) => void
}

export const useDiscountCode = ({
	discountCode,
	discountName,
	setIsLoading,
}: IDiscountCode) => {
	const { profile } = useProfile()
	const { replace } = useRouter()

	const templateParams = {
		user_email: profile?.student.email,
		discount_code: discountCode,
		discount_name: discountName,
	}

	const sendDiscountCode = () => {
		if (!profile) {
			replace('/auth?tab=login')
			return
		}

		setIsLoading(true)

		emailjs.send(
			'service_pyb3ye7',
			'template_bxmpekk',
			templateParams,
			't8WwLokaiJvDV-f6A'
		)
		setIsLoading(false)
	}

	return { sendDiscountCode }
}
