import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {updateService, changeServiceField, addService, cleanCurrentService} from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
		evt.preventDefault();
		if (item.id) {
			//обновление выбранного
			dispatch(updateService(item.id, item.name, item.price));
		} else {
			//добавление нового
			dispatch(addService(item.name, item.price));	
		}
		//очистка полей ввода
		dispatch(cleanCurrentService());	
	}

	const cancel = evt => {
		dispatch(cleanCurrentService());
	}
	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>Save</button>
			{item.id ? <button onClick={cancel}>Cancel</button> : null}
		</form>
	);
}

export default ServiceAdd;
