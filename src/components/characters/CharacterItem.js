import React, {useState} from 'react'


const CharacterItem = ({ item, indice }) => {
  const [digimon, setDigimon] = useState(0)

  const evolution = () =>{
    
   
    // document.getElementById(indice).classList.add('turn-on')
    
    //console.log(document.getElementById(indice).classList.contains('turn-on'))

    setTimeout(() => {
      if(digimon >= 4 ){
        setDigimon(0)
      }else{
        setDigimon(digimon + 1)
      }
    },100)

    // setTimeout(() => {
    //   document.getElementById(indice).classList.remove('turn-on')
    // },1000)


  }

  const frontClick = () => {
    document.getElementById(indice).classList.add('turn-on')
    //console.log('Cliquei na frente')
  }

  const backClick = () => {
    document.getElementById(indice).classList.remove('turn-on')
    //console.log('Cliquei atrás')
  }


 
  return (
    
    <div className='card'>
      <div onClick={evolution} id={indice} className='card-inner'>
        <div onClick={frontClick} className='card-front'>
            <h1>{item[digimon].name}</h1>
            <img src={item[digimon].img} alt='' />
        </div>
        <div onClick={backClick} className='card-back'>
          <h1>{item[digimon].name}</h1>
          <img src={item[digimon].img} alt='' />
          {/* <ul>
            <li>
              <strong>Level:</strong> {item[0].level}
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
