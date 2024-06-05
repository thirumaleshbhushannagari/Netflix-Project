import React from 'react'
import styled from 'styled-components'
import MovieSlider from './MovieSlider'

const SliderComponent = ({movies}) => {

    const getMovieBetween =(start,end)=>{
        return movies.slice(start,end)

    }
  return (
   <SliderWrapper>

    <MovieSlider data ={getMovieBetween(0,10)} title="Only On Netflix"/>
    <MovieSlider data ={getMovieBetween(10,20)} title="Trending Now"/>
    <MovieSlider data ={getMovieBetween(30,40)} title="Popular On Netflix"/>
    <MovieSlider data ={getMovieBetween(40,50)} title="Romantic Movies"/>
    <MovieSlider data ={getMovieBetween(50,60)} title="Epic"/>
    <MovieSlider data ={getMovieBetween(60,70)} title="New Releases"/>
    <MovieSlider data ={getMovieBetween(70,80)} title="Action Movies"/>

   </SliderWrapper>
  )
}

const SliderWrapper = styled.div`
`
export default SliderComponent