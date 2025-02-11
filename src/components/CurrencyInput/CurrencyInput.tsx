import React from 'react'

interface CurrencyInputProps {
	amount: number
	currency: 'UAH' | 'USD' | 'EUR'
	onAmountChange: (newAmount: number) => void
	onCurrencyChange: (newCurrency: 'UAH' | 'USD' | 'EUR') => void
}

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
	amount,
	currency,
	onAmountChange,
	onCurrencyChange,
}) => {
	return (
		<div>
			<input
				type='number'
				value={amount}
				onChange={e => onAmountChange(parseFloat(e.target.value))}
				min='0'
			/>
			<select
				value={currency}
				onChange={e =>
					onCurrencyChange(e.target.value as 'UAH' | 'USD' | 'EUR')
				}
			>
				<option value='UAH'>UAH</option>
				<option value='USD'>USD</option>
				<option value='EUR'>EUR</option>
			</select>
		</div>
	)
}
