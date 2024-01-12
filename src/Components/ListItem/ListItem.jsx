import React, { useEffect, useState } from 'react'
import requests from '../../Requests'
import axios from 'axios'

const ListItem = ({ item }) => {

  return (
    <div>
      <p>{item.title}</p>
      <img style={{ height: "100px" }} src={`https://image.tmdb.org/t/p/original${item?.poster_path}`} alt={item?.title} />
    </div>
  )
}

export default ListItem
