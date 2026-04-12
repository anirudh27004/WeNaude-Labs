import {OrganizationSwitcher, UserButton} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background flex-col gap-4">
      <h1 className="text-2xl font-bold">Welcome to WeNaude Labs</h1>
      <div className="flex items-center gap-4">
        <OrganizationSwitcher/>
        <UserButton/>
      </div>
    </div>
  );
} 