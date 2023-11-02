import { useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useModifyParams = () => {
	const pathname = usePathname()
	const { push } = useRouter()
	const searchParams = useSearchParams()

	const updateQueryParam = useCallback(
		(name: string, value: string, isArray?: boolean) => {
			const params = new URLSearchParams(searchParams)
			let newQueryString = ''
			let newUrl = ''

			if (isArray) {
				const array = searchParams.getAll(name)

				const isExists = array.some(i => i === value)

				if (isExists) {
					const indexToRemove = array.indexOf(value)
					array.splice(indexToRemove, 1)
					params.delete(name)
					array.forEach(item => params.append(name, item))
				} else {
					params.append(name, value)
				}
			} else {
				const isExists =
					params.has(name, value) && params.get(name) === value

				if (isExists) {
					params.delete(name)
					return
				}

				params.set(name, value)
			}

			newQueryString = params.toString()
			newUrl = `${pathname}${newQueryString ? `?${newQueryString}` : ''}`

			push(newUrl, { scroll: false })
		},
		[searchParams, pathname]
	)

	return { updateQueryParam }
}
