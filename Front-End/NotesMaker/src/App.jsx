import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { FindNote } from "./Pages/FindNote";
import { ShowNotes } from "./Components/ShowNotes";

function App() {
  return (
    <div className="bg-background h-[110vh]">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/FindNote' element={<FindNote />} />
        <Route path='/FindNote/:id' element={<ShowNotes />} />
      </Routes>
    </div>
  )
}

export default App;