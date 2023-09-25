import React, { useState, useEffect } from 'react';

const RankItems = () => {

	// items kommer från server-side, setItems gäller react-komponenten som kan ändra items state.
	const [items, setItems] = useState([]);
	const dataType = 1;

	useEffect(() => {
		fetch(`item/${dataType}`)
			.then((results) => {
				return results.json();
			})
			.then(data => {
				setItems(data);
			})
	},[])

	return (
		<main>
			{
				(items != null) ? items.map((item) => <h3>{item.title}</h3>): <div>Loading...</div>
			}
		</main>
	)
}
export default RankItems;