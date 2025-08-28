
import { createContext, useContext, useState } from "react";
import AddPropertyModal from "../component/common/AddPropertyForm";
import "./style.css"

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
      {isModalOpen && (
        <div className="modal-backdrop"
           onClick={() => setIsModalOpen(false)} 
        >
          <AddPropertyModal 
          setIsModalOpen={setIsModalOpen}
          onClick={(e) => e.stopPropagation()}
           />
        </div>
      )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
