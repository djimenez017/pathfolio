import AuthButton from "@/components/UI/AuthButton";

const Landing = () => {
  return (
    <div className="bg-blue mx-2 p-5 rounded-lg text-center w-96">
      <h1 className="text-white font-bold text-6xl pb-10">Pathfolio</h1>
      <p className="text-white">
        Pathfolio is your all-in-one platform to consolidate and share all your
        important links and online presence in one sleek, customizable hub.
        Whether you’re a content creator, entrepreneur, or simply someone with a
        dynamic digital footprint, Pathfolio makes it easy for your audience to
        find and connect with you.
      </p>
      <AuthButton />
    </div>
  );
};

export default Landing;
