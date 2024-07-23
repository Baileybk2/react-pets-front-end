const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`

const index = async () => {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
// uses fetch to make a GET request to the base URL
// uses the .json() method to parse the response
// uses a try catch block to handle any errors
// returns the parsed response

export { index }
// remember to export the function
