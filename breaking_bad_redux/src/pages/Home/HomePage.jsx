import React from 'react'
import "./HomePage.scss"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCharacters } from '../../redux/Slice/CharacterSlice'

import Character from '../../components/Characters/Characters.jsx'
import IsLoading from '../../components/IsLoading/IsLoading'

const Home = () => {
  const dispatch = useDispatch()
  const {personName} = useSelector(state => state.characters)
  const {status} = useSelector(state => state.characters)
  const {error} = useSelector(state => state.characters)
  const {page} = useSelector(state => state.characters)
  const {hasNextPage} = useSelector(state => state.characters)


  useEffect(() => {
    if(status === "idle"){
      dispatch(fetchCharacters())
    }
  }, [dispatch,status] )

  // if(isLoading){
  //   return <IsLoading/>
  // }

  if(error){
    return <h1>{error}</h1>
  }
  return (
  <div className='homeContainer'>
    <h1 className='homeContainer__title'>The Breaking BAD</h1>
    {status ==="loading" && <IsLoading/>}
    <div className='homeContainer__characters'> 
    {personName.map((person, index) => (
        <Character id={person.char_id} key={index} img={person.img} alt={person.name} text={person.name} />
        ))}
    </div>
    <div className='loadMore'>
      {hasNextPage && <button onClick={() => {dispatch(fetchCharacters(page))}}  className='loadMore__button' >Load More ({page})</button> }
    </div>
  </div>
  )
}

export default Home