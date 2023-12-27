const page = ({ params }) => {
  return (
    <div>
      <h1 className="font-bold text-4xl mt-8 text-yellow-400">
        {params.category}
      </h1>

      <div></div>
    </div>
  );
};

export default page;
