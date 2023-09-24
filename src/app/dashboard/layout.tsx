import Header from "./header";
import SideMenu from "./sidemenu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <SideMenu />
      <div className="grow">
        <Header />
        <div className="flex min-h-screen pr-10">{children}</div>
      </div>
    </section>
  );
}
