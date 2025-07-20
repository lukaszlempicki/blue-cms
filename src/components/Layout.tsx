import type { ReactNode } from "react"
import Sidebar from "./Sidebar"

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
