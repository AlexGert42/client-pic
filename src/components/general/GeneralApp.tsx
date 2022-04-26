import { Route, Routes } from "react-router-dom"
import { PageAuth, PageProfile, PageSettings} from "@components/pages"


const GeneralApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageProfile />} />
        <Route path="/auth" element={<PageAuth />} />
        <Route path="/settings" element={<PageSettings />} />
      </Routes>
    </>
  )
}

export default GeneralApp
