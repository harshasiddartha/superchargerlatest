import Navbar from "@/components/navbar";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Navbar /> */}
    <div className="max-w-7xl min-h-screen-[1/2] flex flex-col gap-12 items-start">{children}</div>
    </>
  );
}
