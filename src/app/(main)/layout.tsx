import Header from "@/components/dashboard/header";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
}
