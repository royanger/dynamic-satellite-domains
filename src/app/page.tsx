import { OrganizationSwitcher } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>You are currently on the home page</p>
      <OrganizationSwitcher />
    </div>
  );
}
