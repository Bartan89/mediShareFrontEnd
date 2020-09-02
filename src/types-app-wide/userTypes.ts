export type User = {
  name: string | null
  token: string | null
  email: string | null
}

export type Credentials = {
  email: string
  password: string
}

export type SignUpInput = {
  name: string
  email: string
  password: string
}
