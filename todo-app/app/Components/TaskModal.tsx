interface TaskModalProps {
  modalOpen: boolean
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode
}

const TaskModal: React.FC<TaskModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
      {children}
      </div>
      <label onClick={() => setModalOpen(false)} className="modal-backdrop">
      </label>
    </div>
  );
};

export default TaskModal;
