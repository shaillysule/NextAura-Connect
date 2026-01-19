import React from "react";
import "./ResourceDetailModal.css";
import ResourceDetail from "./ResourceDetail";

function ResourceDetailModal(props) {
  if (!props.open) return null;

  return (
    <div className="modal-overlay" onClick={props.onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={props.onClose}>
          ✕
        </button>

        <ResourceDetail {...props.resource}
        onBook={props.onBook} />
      </div>
    </div>
  );
}

export default ResourceDetailModal;
