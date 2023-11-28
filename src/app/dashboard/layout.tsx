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
          <div className=" w-full p-6 text-center text-stone-500">
            Design by{" "}
            <a
              className="font-semibold hover:underline hover:decoration-2 hover:underline-offset-4 "
              target="_blank"
              href={"https://dribbble.com/shots/18616332-Palmer-Crypto-Web-App"}
            >
              @Arauda
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
