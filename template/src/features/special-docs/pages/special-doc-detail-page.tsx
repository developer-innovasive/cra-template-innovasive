import { Link, RouteComponentProps } from '@reach/router'
import { useObserver } from 'mobx-react-lite'
import React from 'react'

type SpecialDocDetailPageProps = {
  id?: number
} & RouteComponentProps

export const SpecialDocDetailPage = (props: SpecialDocDetailPageProps) => {
  return useObserver(() => {
    return (
      <div className="h-screen w-screen inline-flex justify-center items-center">
        <div className="text-center">
          <p className="text-4xl font-bold">Detail!</p>
          <p className="text-2xl">{props.id}</p>
          <Link to="/">Home page</Link>
        </div>
      </div>
    )
  })
}
