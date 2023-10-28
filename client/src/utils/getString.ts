export const getString = (array: string[] | undefined | string) => {
	if (Array.isArray(array)) {
		return array.join(',')
	}
	if (typeof array === 'string') {
		return array
	} else {
		return
	}
}
