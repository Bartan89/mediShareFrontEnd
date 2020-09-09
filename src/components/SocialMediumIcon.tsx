import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"
import React from "react"
import { Media } from "../types-app-wide/postTypes"

type medium = Media.facebook | Media.linkedIn | Media.twitter

export default function SocialMediumIcon(props: any) {
  return (
    <div>
      <LinkedInIcon />
      <FacebookIcon />
      <TwitterIcon />
    </div>
  )
}
