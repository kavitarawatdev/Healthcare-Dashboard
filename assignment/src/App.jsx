import './App.css'
import { DashboardMainContent } from './layout/DashboardMainContent'
import { Header } from './layout/Header'
import { Sidebar } from './layout/Sidebar'
function App() {

  return (
    <div className='layout grid'>
          <Header/>
          <Sidebar/>
          <DashboardMainContent/>
    </div>
  )
}

export default App
