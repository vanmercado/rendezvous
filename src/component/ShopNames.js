import React from 'react';
import './ListToOffer.css';
import ListToOffer from './ListToOffer';
import { connect } from 'react-redux';
import { useParams, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShopNames = () => {
	const { name } = useParams();
	const [lists, setLists] = useState([]);

	useEffect(() => {
		axios.get('https://app-rendezvous.herokuapp.com/lists').then((res) => {
			setLists(res.data);
		});
	}, []);

	const shopArray = lists.filter((item) =>
		item.type.toLowerCase().replace(/\s/g, '').includes(name)
	);

	return (
		<div className='main-shops'>
			{shopArray.map((item) => {
				return <ListToOffer key={item.name} offer={item} />;
			})}
		</div>
	);
};

export default ShopNames;
