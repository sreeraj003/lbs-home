import { BrowserRouter, Route, Routes } from "react-router-dom"
import Announcements from "./pages/announcements/Announcements"
import Event from "./pages/events/event"
import Contact from "./pages/contact/contact"
import Membership from "./pages/membership/Membership"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="events" element={<Event />} />
          <Route path="contact" element={<Contact />} />
          <Route path="membership" element={<Membership />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App