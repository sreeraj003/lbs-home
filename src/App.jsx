import { BrowserRouter, Route, Routes } from "react-router-dom"
import Announcements from "./pages/announcements/Announcements.jsx"
import Event from "./pages/events/Event.jsx"
import Contact from "./pages/contact/Contact.jsx"
import Membership from "./pages/membership/Membership.jsx"
import Layout from "./layout/Layout.jsx"
import Home from "./pages/home/Home.jsx"


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