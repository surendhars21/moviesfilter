import React from 'react'

const Display = (props) => {
    let data=props.data;
    let language=props.language;
    let country=props.country;
    let genre = props.genre;

    console.log(language+" --- "+country+" --- "+genre);
    if(language!=null){
        data = data.filter((x)=>{
            return x.movielanguages.includes(language)
        })
    }
    if(country!=null){
        data = data.filter((x)=>{
            return x.moviecountries.includes(country)
        })
    }
    if(genre!=null){
        data = data.filter((x)=>{
            return x.moviegenres.includes(genre)
        })
    }
  return (
    <div>
    <div className="display">
        {data.map((x)=>{
            return(
                <div className="movie" key={x.imdbmovieid}>
                <h1>{x.movietitle}</h1>
                <div className="img">
                <img src={x.moviemainphotos} alt='image'/>
                </div>
                <h2><span>Movie Language:</span> </h2>
                <div className="language">{x.movielanguages.map((x)=>{
                  return(
                    <ul>
                        <li>{x}</li>
                    </ul>
                  )
                })}
                </div>
                <h2><span>Movie Countries:</span> </h2>
                <div className="language">
                {x.moviecountries.map((x)=>{
                  return(
                    <ul>
                        <li>{x}</li>
                    </ul>
                 )})}
                 </div>
                <h2><span>Movie Genres:</span> </h2>
                <div className="language">
                {x.moviegenres.map((x)=>{
                  return(
                    <ul>
                        <li>{x}</li>
                    </ul>
                  )})}
                  </div>
                </div>
            )
      })}
        </div>
        <div className="footer">
            <h1>Developed by Surendhar </h1>
        </div>
        </div>
  )
}

export default Display