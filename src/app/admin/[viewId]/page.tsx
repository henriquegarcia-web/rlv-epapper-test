'use client'

import { useParams } from 'next/navigation'

import { IView, viewsData } from '@/data/views'

export default function View() {
  const params = useParams<{ viewId: string }>()

  const getComponentByViewId = (viewId: string) => {
    const mainMenuView = viewsData.find(
      (view: IView) => view.viewPath === viewId
    )

    if (mainMenuView) return mainMenuView.viewComponent

    return <div>View not found</div>
  }

  const viewComponent = getComponentByViewId(params.viewId)

  return <div className="">{viewComponent}</div>
}
