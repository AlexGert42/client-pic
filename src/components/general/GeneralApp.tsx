import { Route, Routes } from "react-router-dom"
import { PageProfile, PageSettings, PageResetPassword, PageResetPasswordConfirm, PageLogin, PageRegister} from "@components/pages"


const GeneralApp = () => {
  return (
    <>
      <Routes>
       
        <Route path="/login" element={<PageLogin/>} />
        <Route path="/registration" element={<PageRegister/>} />

        <Route path="/reset_password" element={<PageResetPassword />} />
        <Route path='/password/reset/confirm/:uid/:token' element={<PageResetPasswordConfirm />} />


        <Route path="/" element={<PageProfile />} />
        <Route path="/settings" element={<PageSettings />} />
      </Routes>
    </>
  )
}

export default GeneralApp
