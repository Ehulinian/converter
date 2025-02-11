import React from 'react'
import styles from './Header.module.scss'

interface HeaderProps {
	rates: { UAH: number; USD: number; EUR: number }
}

export const Header: React.FC<HeaderProps> = ({ rates }) => {
	return (
		<header className={styles.header}>
			<div className={styles.exchangeRates}>
				<p>Курс USD до UAH: {rates.USD}</p>
				<p>Курс EUR до UAH: {rates.EUR}</p>
			</div>
		</header>
	)
}
