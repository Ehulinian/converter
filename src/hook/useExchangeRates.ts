import { useState, useEffect } from 'react'

export const useExchangeRates = () => {
	const [rates, setRates] = useState<{ UAH: number; USD: number; EUR: number }>(
		{ UAH: 1, USD: 0, EUR: 0 }
	)

	useEffect(() => {
		fetch('https://api.exchangerate-api.com/v4/latest/UAH')
			.then(response => response.json())
			.then(data => setRates(data.rates))
			.catch(error => console.error('Error fetching exchange rates:', error))
	}, [])

	return rates
}
