import React from 'react'
import Teaser from './Teaser'
import Feature from './Feature'
import Page from './Page'
import Grid from './Grid'
import RegionController from './RegionController'

const Components = {
  'teaser': Teaser,
  'feature': Feature,
  'page': Page,
  'grid': Grid,
  'region_controller': RegionController
}

export default (blok) => {
  if (typeof Components[blok.component] !== 'undefined') {
    return React.createElement(Components[blok.component], {key: blok._uid, content: blok})
  }
  return React.createElement(() => (
    <div>The component {blok.component} has not been created yet.</div>
  ), {key: blok._uid})
}
