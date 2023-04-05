export const MininCard = ({ img, isActive }) => {
  return (
    <div className={isActive ? "miniCard active" : "miniCard"}>
      <img
        src={img}
        style={{
          width: "100% ",
        }}
      />
    </div>
  );
};
