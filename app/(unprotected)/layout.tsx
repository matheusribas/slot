export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <main className="flex flex-1 w-full h-full items-center justify-center">
      <div className="flex flex-col gap-7 px-4 max-w-[500px] w-full">
        {children}
      </div>
    </main>
  );
}
