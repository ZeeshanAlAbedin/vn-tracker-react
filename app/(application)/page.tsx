import prisma from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.users.findMany();
  return (
    <div className="max-h-screen flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#FF6F61]">
        Test Database Data
      </h1>
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {users.map((user) => (
          <li key={user.id} className = "mb-2">{user.display_name}</li>))}
      </ol>
    </div>
  );
}