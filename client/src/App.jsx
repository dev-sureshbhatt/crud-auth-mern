import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn  from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Header from "./components/Header"
import CreateForm from "./pages/CreateForm"
export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      
      <Route index element={<Home />}/>
      <Route path="/sign-in" element={<SignIn />}/>
      <Route path="/sign-up" element={<SignUp />}/>
      <Route path="/create-form" element={<CreateForm />}/>
      
    </Routes>
    </BrowserRouter>
  )
}
