import { Routes, Route } from "react-router-dom"
import { Layout } from "@/components/Layout"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/products" element={<div>Lista produktów</div>} />
      </Routes>
    </Layout>
  )
}

export default App
