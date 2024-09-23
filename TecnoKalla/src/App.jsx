import { useRoutes } from "react-router-dom";
import routes from "./Routes";



const App = () => {

  const router = useRoutes(routes)

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      
      {router}
      
      
    </div>
  )
}

export default App
