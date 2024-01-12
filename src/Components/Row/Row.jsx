
import ListItem from '../ListItem/ListItem'
import React, { useEffect, useState } from 'react'
import requests from '../../Requests'
import axios from 'axios'

const Row = ({ request }) => {

  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get(request)
      .then((res) => {
        setItems(res.data.results)
        console.log(items)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [])
  return (
    <div>
      {items.map((item) => (
        // <p key={item.id}>{item.title}</p>
        <ListItem item={item} key={item.id} />
      ))}


    </div>
  )
}

export default Row
