// Certificate.jsx
// eslint-disable-next-line react/prop-types
const Certificate = ({ ImgSertif }) => {
  return (
    <div className="certificate-card">
      {ImgSertif ? (
        <img
          src={ImgSertif}
          alt="Certificate"
          className="w-full h-auto object-cover rounded-md shadow-md"
        />
      ) : (
        <p className="text-slate-400 text-sm">No Image</p>
      )}
    </div>
  );
};

export default Certificate;
