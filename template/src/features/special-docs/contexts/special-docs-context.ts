import { action, observable } from 'mobx'
import { createContext } from 'react'

import { SpecialDoc } from '../../../core/models/special-doc'

class SpecialDocsContext {
  @observable pageName: string = 'A1'
  @observable specialDocs: SpecialDoc[] = []

  @action getSpecialDocs = (): SpecialDoc[] => {
    return []
  }
}

export const specialDocsContext = createContext(new SpecialDocsContext())
