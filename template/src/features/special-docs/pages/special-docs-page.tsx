import { RouteComponentProps } from '@reach/router'
import { useObserver } from 'mobx-react-lite'
import React from 'react'

export const SpecialDocsPage = (props: RouteComponentProps) => {
  return useObserver(() => {
    return (
      <div className="h-screen w-screen inline-flex justify-center items-center">
        <div className="text-center">
          <p className="text-4xl font-bold">Welcome!</p>
          <p className="text-2xl">Innovasive's Create React App template!</p>
        </div>
      </div>
    )
  })
}
