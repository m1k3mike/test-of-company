import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onSave: (name: string, address: string) => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onSave }) => {
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");

  if (!show) return null;

  const handleSubmit = () => {
    onSave(name, address);
    setName("");
    setAddress("");
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Добавить компанию</h2>
        <input
          type="text"
          placeholder="Название компании"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.modalInput}
        />
        <input
          type="text"
          placeholder="Адрес"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={styles.modalInput}
        />
        <button onClick={handleSubmit} className={styles.modalButton}>
          Сохранить
        </button>
        <button
          onClick={onClose}
          className={`${styles.modalButton} ${styles.cancelButton}`}
        >
          Отмена
        </button>
      </div>
    </div>
  );
};

export default Modal;
