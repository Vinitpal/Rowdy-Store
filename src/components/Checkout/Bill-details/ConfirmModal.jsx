import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

// Redux
import { useDispatch } from "react-redux";
import {
  placeOrder,
  resetTotal,
  clearCart,
  getNotification,
} from "../../../actions/index";
import { Link } from "react-router-dom";

const ConfirmModal = ({ open, setOpen, address, cart, total }) => {
  const cancelButtonRef = useRef(null);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(placeOrder({ cart, address, total }));
    dispatch(resetTotal(0));
    dispatch(clearCart());
    dispatch(
      getNotification({
        message: "Your order was placed successfully.",
        type: "success",
      })
    );
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        auto-reopen="true"
        className="confirm-modal-section"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="wrapper">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="wrapper-transition" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden-element" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <main>
              <div className="content">
                <div className="content-container">
                  <div className="icon">
                    <ExclamationIcon
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text">
                    <Dialog.Title as="h3" className="">
                      Place Your Order
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-lg text-gray-500">
                        Please confirm your address details.
                      </p>
                      <p className="text-sm text-black">{address}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn__container">
                <Link
                  to="/orders"
                  type="button"
                  className="btn confirm-btn"
                  onClick={() => handleConfirm()}
                >
                  Confirm
                </Link>
                <button
                  type="button"
                  className=" btn cancel-btn"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </main>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ConfirmModal;
