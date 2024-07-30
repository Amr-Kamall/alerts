import { ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";
import { AlertType } from "../../src/types";

interface Iprops {
  type: AlertType; // should be on of alertType properties
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}

const Alert = ({ type, children, icon, title, description }: Iprops) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="alert-right">
          <span className="alert-icon">{icon}</span>
          <h3>{title}</h3>
        </div>

        <X className="close" />
      </div>
      {children ? children : description}
    </div>
  );
};

export default Alert;
