import AuthButton from "@/components/UI/AuthButton";

const Landing = () => {
  return (
    <div className="bg-blue">
      <h1 className="text-black">Pathfolio</h1>
      <p>
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
