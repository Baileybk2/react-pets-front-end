import { useState, useEffect } from "react"
import * as perService from "./services/petService"

import PetList from "./components/PetList"

const App = () => {
  const [petList, setPetList] = useState([])

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const pets = await perService.index()

        if (pets.error) {
          throw new Error(pets.error)
        }

        setPetList(pets)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPets()
  }, [])

  return <PetList petList={petList} />
}

export default App
