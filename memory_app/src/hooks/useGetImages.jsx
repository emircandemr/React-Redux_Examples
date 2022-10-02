import React, { useEffect, useState } from 'react'

const getRandomPage = () => Math.round(Math.random() * (10-1) +1 )

const useGetImages = () => {
    const [images, setImages] = useState([])
    
    const buildURL = () => {
        let url = new URL ("https://api.pexels.com/v1/search")
    
        url.search = new URLSearchParams({
          query: "nature",
          orientation : "square",
          size : "small",
          per_page : 10,
          page : getRandomPage()
        })
    
        return url
    
      }
    
      const fetchPics = async () => {
    
          await fetch(buildURL(), {
            headers : {
              Authorization : "563492ad6f91700001000001dbe5a78ed93f4bc28a6d421f406e16a9"
            }
          })
          .then(data => data.json())
          .then(data => setImages(data.photos))
    
      }
    
      useEffect(() => {
        fetchPics()
      },[])

      return images

}

export default useGetImages