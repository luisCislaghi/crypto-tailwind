export default function DashboardLayout({
  children,
  header,
  sidemenu,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  sidemenu: React.ReactNode;
}) {
  return (
    <>
      <section className="flex">
        {sidemenu}
        <div className="grow">
          {header}
          <div className="flex min-h-screen items-start">{children}</div>
        </div>
      </section>
    </>
  );
}
