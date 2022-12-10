import { useState, useEffect } from 'react';
const cachData = [];

const useHock =()=>{

    const [user, setUser] = useState(null);
    const [id, setId] = useState(1);
    const [loading, setLoading] = useState(false)
  
    console.log(user);
  
    useEffect(() => {
  
      if (cachData[`userid-${id}`]) {
        setUser(cachData[`userid-${id}`]);
        return;
      };
      setLoading(true)
        fetchData(id)
        .then(data=>{
          setUser(data)
        })
        .finally(() => setLoading(false))
    }, [id]);
  
    useEffect(()=>{
      if (!cachData[`userid-${id +1}`] && id<10) {
        fetchData(id+1)
      }
    },[id])
    
    const fetchData = (id) => {
     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => {
          cachData[`userid-${id}`] = data;
          return data;
        })
    };
  
   
  
  
    const handleInc = () => {
      if (id < 10) {
        setId(id + 1)
      }
    };
  
    const handaleDec = () => {
      if (id > 1) {
        setId(id - 1)
      }
    };

    return{
        id,
        user,
        loading,
        handleInc,
        handaleDec
    }
};

export default useHock