import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";
import Alert from "../components/Alert/Alert";

function App() {
  return (
    <>
      <Alert type={"alert-default"} icon={<Bell />} title="somthing went wrong">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ad
          impedit, saepe iusto sapiente ex quisquam? Lorem, ipsum dolor sit amet
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ad
          adimpedit, saepe iusto sapiente <a href="#">blablabla</a> ex quisquam?
        </p>
      </Alert>
      <Alert
        type="alert-info"
        icon={<AlertTriangle />}
        title="warning!!!"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ad
          impedit, saepe iusto sapiente ex quisquam? Lorem, ipsum dolor sit amet
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ad
          adimpedit, saepe iusto sapiente"
      />
      <Alert
        type="alert-warning"
        icon={<Ban />}
        title="somthing went wrong"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ad
          impedit, saepe iusto sapiente ex quisquam? Lorem, ipsum dolor sit amet
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ad
          adimpedit, saepe iusto sapiente"
      />
      <Alert
        type="alert-error"
        icon={<CheckCheck />}
        title="somthing went wrong"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ad
          impedit, saepe iusto sapiente ex quisquam? Lorem, ipsum dolor sit amet
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ad
          adimpedit, saepe iusto sapiente"
      />
      <Alert
        type="alert-success"
        icon={<Info />}
        title="somthing went wrong"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ad
          impedit, saepe iusto sapiente ex quisquam? Lorem, ipsum dolor sit amet
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ad
          adimpedit, saepe iusto sapiente"
      />
    </>
  );
}

export default App;
