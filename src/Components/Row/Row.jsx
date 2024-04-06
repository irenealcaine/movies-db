import ListItem from '../ListItem/ListItem'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SwiperSlide, Swiper } from 'swiper/react';

const Row = ({ request }) => {

  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get(request)
      .then((res) => {
        setItems(res.data.results)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [])
  return (
    // <div>
    //   {items.map((item) => (
    //     // <p key={item.id}>{item.title}</p>
    //     <ListItem item={item} key={item.id} />
    //   ))}


    // </div>
    <Swiper>
      <div>
        {items.map((item) => (
          <SwiperSlide>
            <img style={{ height: "100px" }} src={`https://image.tmdb.org/t/p/original${item?.poster_path}`} alt={item?.title} />
          </SwiperSlide>
        ))}


      </div>
    </Swiper>
  )
}

export default Row
