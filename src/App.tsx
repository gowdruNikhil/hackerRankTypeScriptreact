import React, {useEffect, useState} from 'react';
import axios from "axios";
import ItemCards from './Components/ItemCards'


type Results = {
  id: number
}

async function getBooksLists(): Promise<Results[]> {
  const url = "https://gutendex.com/books";
  const response = await axios.get<any, any>(url);
  return response?.data?.results;
}

async function getBooksNextLists(pageCount: number): Promise<Results[]> {
  const url = "https://gutendex.com/books" + '?page=' + pageCount;
  const response = await axios.get<any, any>(url);
  return response?.data?.results;
}



function App() {

  const [booksLists , setBooksLists] = useState<Results[] >([])
  const [page, setPage] = useState(1)
  
  useEffect(() => {
    (async () => {
      const books = await getBooksLists();
      setBooksLists(books);
    })();
  }, []);

const handleOnScrollBottomReached = () => {
  setPage(page + 1);
  const pageCount = page + 1;
  (async () => {
      const books = await getBooksNextLists(pageCount);
      if(booksLists?.length) setBooksLists([...booksLists, ...books]);
    })();
}
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}} >
      <ItemCards onBottomScrolled={handleOnScrollBottomReached} data={booksLists}/>
    </div>
  );
}

export default App;
