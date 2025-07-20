import { Home, List } from "lucide-react"
import { cn } from "@/lib/utils"
import { NavLink } from "react-router-dom"
import type { FunctionComponent } from "react"

const Sidebar: FunctionComponent = () => {
  const items = [
    { label: "Dashboard", icon: <Home className="w-4 h-4" />, to: "/" },
    { label: "Lista produktów", icon: <List className="w-4 h-4" />, to: "/products" },
  ]

  return (
    <aside className="w-64 border-r h-screen px-4 py-6 bg-muted/40">
      <nav className="space-y-2">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium",
                isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-muted"
              )
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
