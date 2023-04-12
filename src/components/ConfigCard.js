const ConfigCard = ({ name, deliveryTime }) => {
  return (
    <div className="card">
      <h4>{name}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default ConfigCard;
