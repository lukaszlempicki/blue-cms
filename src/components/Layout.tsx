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
        <header className="border-b px-4 py-3">
          <h1 className="text-lg font-semibold">Blue CMS</h1>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
