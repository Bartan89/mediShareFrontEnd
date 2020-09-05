export const ADD_CONTENT = "ADD_CONTENT"
export const ADD_STATUS = "ADD_STATUS"

type AddContent = {
  type: typeof ADD_CONTENT
  content: string
}

type AddStatus = {
  type: typeof ADD_STATUS
  status: string
}

export type PostActionTypes = AddContent | AddStatus
