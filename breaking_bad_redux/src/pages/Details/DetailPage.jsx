import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import IsLoading from '../../components/IsLoading/IsLoading'
import "./DetailPage.scss"

const DetailPage = () => {

    const {char_id} = useParams()
    const[char,setChar] = useState(null)
    const [isLoading,setIsLoading] = useState(true)

    useEffect( () => {
        axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}characters/${char_id}`)
        .then(res => res.data)
        .then( data => setChar(data[0]))
        .finally(() => setIsLoading(false))
    },[char_id])  
    
  return (
    <div className='charDetails' >
        {isLoading && <IsLoading/>}
        {char && 
        <div className='charDetails__Content' >
            <h1 className='charDetails__title'> 
                {char.name}
            </h1>
            <div className='charInfos' >
                <div className='charInfos__imgContent' >
                    <img className='charInfos__img' src={char.img} alt={char.name} />    
                </div>
                <div className='charInfos__info' >
                    <div className='charInfos__info__item' >
                        <h3 className='charInfos__info__title' >Birthday</h3>
                        <p className='charInfos__info__text' >{char.birthday}</p>
                        <h3 className='charInfos__info__title' >Nickname</h3>
                        <p className='charInfos__info__text' >{char.nickname}</p>
                        <h3 className='charInfos__info__title' >Status</h3>
                        <p className='charInfos__info__text' >{char.status}</p>
                        <h3 className='charInfos__info__title' >Occupation</h3>
                        <p className='charInfos__info__text' >{char.occupation.map( (item) => <li>{item}</li>)}</p>
                        <h3 className='charInfos__info__title' >Portrayed</h3>
                        <p className='charInfos__info__text' >{char.portrayed}</p>
                    </div>
                </div>
            </div>
           
        </div> 
        }
    </div>

  )
  
  }


export default DetailPage