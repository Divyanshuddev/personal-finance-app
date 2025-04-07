import { Route, Routes } from "react-router-dom"
import Overview from "./pages/Overview"
import Transaction from "./pages/Transaction"
import Budgets from "./pages/Budgets"
import Pots from "./pages/Pots"
import RecurringBills from "./pages/RecurringBills"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/pots" element={<Pots />} />
        <Route path="/recurring-bills" element={<RecurringBills />} />
      </Routes>
    </>
  )
}

export default App
