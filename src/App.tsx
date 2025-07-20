import { Routes, Route } from "react-router-dom"
import { Layout } from "@/components/Layout"
import DashboardView from "./views/DashboardView"
import ProductsView from "./views/ProductsView"
import type { FunctionComponent } from "react"

const App: FunctionComponent = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<DashboardView />} />
      <Route path="/products" element={<ProductsView />} />
      {/* <Route path="/products/new" element={<CreateProductView />} /> */}
      {/* <Route path="/products/:id/edit" element={<EditProductView />} /> */}
    </Routes>
  </Layout>
) 

export default App
