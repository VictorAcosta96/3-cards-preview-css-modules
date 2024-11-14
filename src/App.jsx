import Card from './components/card/Card';
import Cards from './components/cards/Cards';

const App = () => {
	return (
		<div>
			{/* <h1>Curso de react.</h1> */}
			<Cards>
				<Card
					icon='/assets/images/icon-sedans.svg'
					title='Sedans'
					text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
					color='orange'
					position='first'
				/>
				<Card
					icon='/assets/images/icon-suvs.svg'
					title='Suvs'
					text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
					color='blue'
				/>
				<Card
					icon='/assets/images/icon-luxury.svg'
					title='Luxury'
					text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
					color='green'
					position='last'
				/>
			</Cards>
		</div>
	);
};

export default App;
