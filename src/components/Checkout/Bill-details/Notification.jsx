import {
  CheckCircleIcon,
  XIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { closeNotification } from "../../../actions";

const Notification = ({ message, type }) => {
  let colorClassName = "";
  let btnClassName = "";

  if (type === "success") {
    colorClassName = "bg-green-100 text-green-400 ";
    btnClassName =
      "bg-green-50 text-green-500 hover:bg-green-100 focus:ring-offset-green-50 focus:ring-green-600";
  } else if (type === "alert") {
    colorClassName = "bg-yellow-100 text-yellow-400 ";
    btnClassName =
      "bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-offset-yellow-50 focus:ring-yellow-600";
  }

  const dispatch = useDispatch();
  return (
    <div className={`${colorClassName} notification animate-wiggle`}>
      <div className="flex ">
        <div className="flex-shrink-0">
          {type === "success" ? (
            <CheckCircleIcon
              className={`h-5 w-5 ${colorClassName}`}
              aria-hidden="true"
            />
          ) : type === "alert" ? (
            <ExclamationCircleIcon
              className={`h-5 w-5 ${colorClassName}`}
              aria-hidden="true"
            />
          ) : (
            ""
          )}
        </div>
        <div className="ml-3">
          <p className={`text-sm font-medium ${colorClassName}`}>{message}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className={`notification-btn ${btnClassName}`}
              onClick={() => dispatch(closeNotification())}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
