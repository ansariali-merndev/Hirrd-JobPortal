export const Title = ({ title }) => {
  return (
    <>
      <h2 className="text-2xl md:text-6xl font-extrabold text-center my-4 bg-gradient-to-br from-gray-800 via-gray-200 to-white text-transparent capitalize bg-clip-text">
        {title}
      </h2>
    </>
  );
};
