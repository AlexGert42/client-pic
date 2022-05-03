import { Route, Routes } from "react-router-dom"
import { PageAuth, PageProfile, PageSettings, PageResetPassword, ResetPasswordConfirm} from "@components/pages"


const GeneralApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageProfile />} />
        <Route path="/auth" element={<PageAuth />} />
        <Route path="/reset_password" element={<PageResetPassword />} />
        <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
        <Route path="/settings" element={<PageSettings />} />
      </Routes>
    </>
  )
}

export default GeneralApp
