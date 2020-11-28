import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {filterService} from '../actions/actionCreators';

function ServiceFilter() {
    const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();
    const [filterText, setFilterText ] = useState("");

    useEffect(() => {
        //очитска фильтра при любом изменении списка
        //то есть при нажатии на кнопки интерфейса фильтр сбрасывается
        cleanFilterList();
        return
    }, [items])

	const handleChange = evt => {
		const {value} = evt.target;
        dispatch(filterService(items, value));
        setFilterText(value);
	}

    const cleanFilterList = evt => {
		//очистить фильтр и обновить список
        dispatch(filterService(items, ""));
        setFilterText("");
    }

	return (
		<div className="filterDiv">
            <span className="marginRight">Фильтр</span>
			<input className="marginRight" name='price' onChange={handleChange} value={filterText} />
            <button onClick={cleanFilterList}>Очистить</button>
		</div>
	);
}

export default ServiceFilter;
