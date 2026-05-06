import './Modal.css';

const DetailsModal = ({product}) => {
return (
    <>
      <div className="modal-backdrop"></div>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
      </div>
    </>
  );
}

export default DetailsModal;