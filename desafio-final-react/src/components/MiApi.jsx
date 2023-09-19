
import React, { useEffect, useState } from "react";
import ListName  from '../components/ListName';

 const MiApi = () => {

    const [users, setUsers] = useState([]);
    const [search, steSearch] = useState("");

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        await fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUsers(data))
          .catch((error) => console.log(error));
      };

      const handleChange = (e) => {
        steSearch(e.target.value);
        console.log(e.target.value)
      };

           const isFiltered = users.filter((c) => {
        if (c.name.toLowerCase().includes(search.toLowerCase()) ) {
          return true;
        }
        return false;
      })
      

  return (
    <ListName onChange={handleChange} search={search}  users={isFiltered} />
  )
}
export default MiApi
