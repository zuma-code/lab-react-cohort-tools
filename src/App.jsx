import "./App.css";
import Navbar from "./components/Navbar";
import StudentListPage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <div className="pages">
        <StudentListPage />

        <StudentDetailsPage />

        <UserProfilePage />
      </div>

    </div>
  );
}

export default App;
