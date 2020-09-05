// const _DRAFT = "Draft"
// const _PENDING_APPROVAL = "Await approval"
// const _DISREGARDED = "Disregarded"
// const _APPROVED = "Approved"
// const _PUBLISHED = "Published"

export type Post = {
  content: string | null
  id: number | null
  status: Status | null
}

export type Status = "Draft" | "Await approval" | "Disregarded" | "Published"

// export enum Statuses {
//   _DRAFT = "Draft",
//   _PENDING_APPROVAL = "Await approval",
//   _DISREGARDED = "Disregarded",
//   _APPROVED = "Approved",
//   _PUBLISHED = "Published"
// }

// export type Status = keyof typeof Statuses

//validation  1) ->  Is this good?
//sustainable 2) ->  Can it be improved
