import { Dispatch, SetStateAction, useState } from 'react'
import emailjs from '@emailjs/browser'

interface ISendCode {
	setActivePage: Dispatch<SetStateAction<string>>
}

export const useSendCode = ({ setActivePage }: ISendCode) => {
	const [verificationCode, setVerificationCode] = useState('')

	const templateParams = {
		user_email: '',
		verify_code: '',
	}

	const sendEmail = async (studentEmail: string) => {
		genVerifyCode()
		templateParams.user_email = studentEmail
		setActivePage('loader')
		templateParams.verify_code &&
			templateParams.user_email &&
			emailjs
				.send(
					'service_pyb3ye7',
					'template_ysyimp5',
					templateParams,
					't8WwLokaiJvDV-f6A'
				)
				.then(() => {
					setVerificationCode(templateParams.verify_code)
					setActivePage('checkemail')
				})
	}

	const genVerifyCode = () => {
		const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		const codeLength = 5
		let code = ''
		for (let i = 0; i <= codeLength; i++) {
			let randomNumber = Math.floor(Math.random() * chars.length)
			code += chars.substring(randomNumber, randomNumber + 1)
		}
		templateParams.verify_code = code
	}

	return { sendEmail, verificationCode }
}
