import React, {useState} from 'react'




const CharacterItem = ({ item }) => {
  const [digimon, setDigimon] = useState(0)


  const turnOn = () =>{
  
    if(digimon >= 4 ){
    setDigimon(0)
    }else{
    setDigimon(digimon + 1)

     }
  }

    
  return (
    
    <div className='card'>
      <div onClick={turnOn} className='card-inner'>
        <div className='card-front'>
          <h1>{item[digimon].name}</h1>
          <img src={item[digimon].img} alt='' />
        </div>
        <div className='card-back'>
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
