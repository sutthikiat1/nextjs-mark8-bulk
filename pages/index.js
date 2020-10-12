import "bootstrap/dist/css/bootstrap.min.css";
import BasicLayout from "../layouts/Basic";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import InputUpload from "../components/InputUpload";
import Tables from "../components/Tables";
import { ContextProvider } from "../hooks/DataProvider";

const Index = () => {
  return (
  <>
    <Header />
    <BasicLayout>
      <Navbar />
      <ContextProvider>
        <InputUpload />
        <Tables />
      </ContextProvider>
    </BasicLayout>
  </>
  )
}

export default Index;
