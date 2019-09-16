import Components from './index'
import SbEditable from 'storyblok-react'

const region = 'FL' // Get from cookie

export default (props) => props.content.body.filter((blok) => { return blok.region == region }).map((blok) =>
  Components(blok)
)
