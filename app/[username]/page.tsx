import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import Card from "@/components/UI/Card";

const prisma = new PrismaClient();

const Page = async () => {
  const session = await auth();
  const user = session?.user;

  const userLinks = await prisma.link.findMany({
    where: {
      userId: user?.id,
    },
  });

  const Links = userLinks.map((link) => {
    return <Card title={link.title} url={link.url} />;
  });

  console.log(userLinks);
  return (
    <div className="text-black sm:w-3/5 sm:mt-5 mx-auto">
      <div className="flex justify-between mx-auto items-center mb-4">
        <h2 className="font-bold text-3xl text-black">Dashboard </h2>
        <button className="bg-pink px-8 py-3 text-white">Add New</button>
      </div>
      {Links}
    </div>
  );
};

export default Page;
