import { useState, useEffect } from "react"
import * as perService from "./services/petService"

import PetList from "./components/PetList"
import PetDetail from "./components/PetDetail"
import PetForm from "./components/PetForm"

const App = () => {
  const [petList, setPetList] = useState([])
  const [selected, setSelected] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen)
  }

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

  const updateSelected = (pet) => {
    setSelected(pet)
  }

  return (
    <>
      <PetList
        petList={petList}
        updateSelected={updateSelected}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? <PetForm /> : <PetDetail selected={selected} />}
    </>
  )
}

export default App
