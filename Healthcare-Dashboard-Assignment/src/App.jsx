import './App.css'
import { DashboardMainContent } from './layout/DashBoardMainContent'
import { Header } from './layout/Header'
import { Sidebar } from './layout/Sidebar'

function App() {

  return (
    <>
        <div className='main-layout grid'>
          <Header/>
          <Sidebar/>
          <DashboardMainContent/>
        </div>
    </>
  )
}

export default App
