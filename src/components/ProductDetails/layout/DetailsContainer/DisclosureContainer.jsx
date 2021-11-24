import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const DisclosureContainer = ({ title, desc }) => {
  return (
    <div className="disclosure__container">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="btn focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <h1 className="">{title}</h1>
              <ChevronUpIcon
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-blue-500`}
              />
            </Disclosure.Button>
            <Transition
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="transform -translate-y-24 opacity-0"
              enterTo="transform translate-y-0 opacity-1"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="transform translate-y-0 opacity-1"
              leaveTo="transform -translate-y-24 opacity-0"
            >
              <Disclosure.Panel className="desc">{desc}</Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default DisclosureContainer;
