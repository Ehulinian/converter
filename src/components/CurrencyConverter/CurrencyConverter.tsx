import React, { useState } from 'react'

import styles from './CurrencyConverter.module.scss'
import { useExchangeRates } from '@/hook/useExchangeRates'
import { CurrencyInput } from '../CurrencyInput/CurrencyInput'
import { Header } from '../Header/Header'

const CurrencyConverter: React.FC = () => {
	const [amount1, setAmount1] = useState<number>(1)
	const [amount2, setAmount2] = useState<number>(1)
	const [currency1, setCurrency1] = useState<'UAH' | 'USD' | 'EUR'>('UAH')
	const [currency2, setCurrency2] = useState<'UAH' | 'USD' | 'EUR'>('USD')

	const rates = useExchangeRates()

	const convert = (
		amount: number,
		fromCurrency: 'UAH' | 'USD' | 'EUR',
		toCurrency: 'UAH' | 'USD' | 'EUR'
	): number => {
		if (fromCurrency === toCurrency) return amount
		const rate = rates[toCurrency] / rates[fromCurrency]
		return amount * rate
	}

	return (
		<div className={styles.currencyConverter}>
			<Header rates={rates} />
			<div className={styles.converter}>
				<CurrencyInput
					amount={amount1}
					currency={currency1}
					onAmountChange={(newAmount: number) => {
						setAmount1(newAmount)
						setAmount2(convert(newAmount, currency1, currency2))
					}}
					onCurrencyChange={(newCurrency: 'UAH' | 'USD' | 'EUR') => {
						setCurrency1(newCurrency)
						setAmount2(convert(amount1, newCurrency, currency2))
					}}
				/>
				<CurrencyInput
					amount={amount2}
					currency={currency2}
					onAmountChange={(newAmount: number) => {
						setAmount2(newAmount)
						setAmount1(convert(newAmount, currency2, currency1))
					}}
					onCurrencyChange={(newCurrency: 'UAH' | 'USD' | 'EUR') => {
						setCurrency2(newCurrency)
						setAmount1(convert(amount2, currency2, newCurrency))
					}}
				/>
			</div>
		</div>
	)
}

export default CurrencyConverter
