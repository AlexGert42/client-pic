import { Route, Routes } from "react-router-dom"
import { PageLogin, PageProfile, PageSettings} from "@components/pages"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageProfile />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/settings" element={<PageSettings />} />
      </Routes>
    </>
  )
}

export default App
