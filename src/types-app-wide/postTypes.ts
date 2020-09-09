export type Post = {
  content: string | null
  id: number | null
  status: Status | null
  translation?: string | null
}

export type Translation = {
  id: number | null
  content: string | null
  loading?: Boolean
}

export enum Status {
  draft = "Draft",
  awaitApproval = "Await approval",
  disregarded = "Disregarded",
  published = "Published"
}

export enum Media {
  linkedIn = "LinkedIn",
  facebook = "Facebook",
  twitter = "Twitter"
}
