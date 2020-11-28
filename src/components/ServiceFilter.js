import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {filterService} from '../actions/actionCreators';

function ServiceFilter() {
	const items = useSelector(state => state.serviceList);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {value} = evt.target;
		dispatch(filterService(items, value));
	}

	return (
		<div className="filterDiv">
            <span className="filterSpan">Фильтр</span>
			<input name='price' onChange={handleChange} />
		</div>
	);
}

export default ServiceFilter;
