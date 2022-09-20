/* eslint-disable no-undef */
import React,{useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
// import { sortPostsAsc, sortPostsDesc, searchPosts } from '../../redux/modules/reducers/reducer';
// import { 
	// sortPostsAsyc, sortPostsDesync, 
	// searchPostsAsync } from '../../redux/modules/reducers/thunk';


const Header = ({search, setSearch, onChange}) => {
    const dispatch = useDispatch();
    const [sort, setSort] = useState('asc');

    // useEffect(() => {
	// 	dispatch(searchPostsAsync(search));
	// 	// if (sort === 'desc') {
	// 	// 	dispatch(sortPostsDesync());
	// 	// }
	// 	// if (sort === 'asc') {
	// 	// 	dispatch(sortPostsAsyc());
	// 	// }
	// }, [search, 
	// 	sort, 
	// 	dispatch]);

  return (
    <>
        {/* <header>
            <div className="title">
            <h1>React Redux Filtering</h1>
            </div>
            <div className="filters">
            <div className="search">
					<input
						type="text"
						value={search}
						onChange={onChange}
						placeholder="Search"
					/>
				</div>
                <div className="sort">
					<select onChange={(e) => setSort(e.target.value)}>
						<option value="asc">ASC</option>
						<option value="desc">DESC</option>
					</select>
				</div>
            </div>
        </header> */}
      
    </>
  )
}

export default Header;
