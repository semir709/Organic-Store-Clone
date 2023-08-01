const PersonInfo = ({ image, alt, name }) => {
  return (
    <div className="flex items-center justify-center ">
      <div className=" w-[55px] h-[55px] rounded-full">
        <img
          src={image}
          alt={alt}
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <div className="ms-5">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default PersonInfo;
