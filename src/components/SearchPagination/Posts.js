import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAsync } from "../../redux/modules/reducers/thunk";
import PostCard from "./PostCard";
// import Header from "./Header";
import Paginate from "./Paginate";


  const Posts = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [allPosts, setAllPosts] = useState([]);




  const { posts, isLoading, errorMessage } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    if(posts !== null) {
      setAllPosts(posts)
    }
  }, [posts])

  const handleChangeSearch = (e) => {
    if(e.target.value.length > 0) {
        setCurrentPage(1);
    }
    setSearch(e.target.value)
    requestSearch(e.target.value)
}

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch]);

  const postPerPage = 6;
	const totalPosts = allPosts.length;

	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const filterPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  function escapeRegExp(value) {

    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  
  }

  const requestSearch = (search) => {
    const searchRegex = new RegExp(escapeRegExp(search), "i");
    const searchPosts = allPosts.filter((item) => {
      return Object.keys(item).some((field) => {
        console.log({item})
        console.log({field})
        return searchRegex.test(item[field])
      })
    })
    setAllPosts(searchPosts)
    console.log({allPosts})
  } 

  return (
    <>
        {/* <Header search={search} setSearch={setSearch} onChange={handleChangeSearch}/> */}
        <header>
            <div className="title">
            <h1>React Redux Filtering</h1>
            </div>
            <div className="filters">
            <div className="search">
					<input
						type="text"
						value={search}
						onChange={handleChangeSearch}
						placeholder="Search"
					/>
				</div>
                {/* <div className="sort">
					<select onChange={(e) => setSort(e.target.value)}>
						<option value="asc">ASC</option>
						<option value="desc">DESC</option>
					</select>
				</div> */}
            </div>
        </header>

      {errorMessage && <h2 style={{ color: "red" }}>{errorMessage}</h2>}
      {isLoading && isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="container">
          <div className="posts">
            {filterPosts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
          
          {totalPosts > postPerPage && (
              <Paginate 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPosts={totalPosts}
              postPerPage={postPerPage}
              />
          )}
              
        </div>
      )}
    </>
  );
};

export default Posts;
