import { lazy, LazyExoticComponent, FC } from 'react'
import { NoProps } from '../../types'

const Navigation: LazyExoticComponent<FC<NoProps>> = lazy(() =>
  import('./Navigation').then((module) => ({
    default: module.Navigation,
  }))
)

export default Navigation
