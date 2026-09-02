import CalendarApp from "@/components/feature/Calendar";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col w-full px-10 py-6 gap-10">
      <div className="flex flex-col gap-2">
        <h2>Calendário</h2>
        <p className="text-muted-foreground">
          Aqui você pode visualizar e gerenciar seu calendário.
        </p>
      </div>

      <CalendarApp />
    </main>
  );
}
