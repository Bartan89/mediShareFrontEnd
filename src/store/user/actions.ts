import Axios from "axios"

const API_URL = "http://localhost:4000/"

export function login(email: string | undefined, password: string | undefined) {
  return async () => {
    const response = await Axios.post(`${API_URL}login`, {
      email,
      password
    })
    console.log(response)

    console.log("I work")
  }
}
