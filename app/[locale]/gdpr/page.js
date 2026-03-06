export const metadata = { title: 'Politică GDPR | Neofort BIZ', description: 'Politica de confidențialitate și protecția datelor personale - Neofort BIZ.' };
export default function GdprPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-8">Politică GDPR</h1>
        <div className="prose prose-lg text-gray-700 space-y-4">
          <p>Neofort BIZ respectă confidențialitatea datelor dvs. personale conform Regulamentului (UE) 2016/679 (GDPR).</p>
          <h2 className="text-xl font-bold text-primary">Date colectate</h2>
          <p>Colectăm date personale (nume, telefon, email, adresă) exclusiv pentru procesarea cererilor de ofertă și comunicarea cu clienții noștri.</p>
          <h2 className="text-xl font-bold text-primary">Utilizarea datelor</h2>
          <p>Datele sunt utilizate exclusiv pentru scopul declarat și nu sunt transmise terților fără consimțământul dvs.</p>
          <h2 className="text-xl font-bold text-primary">Contact DPO</h2>
          <p>Pentru exercitarea drepturilor GDPR: <a href="mailto:comenzi@neofort-biz.ro" className="text-accent hover:underline">comenzi@neofort-biz.ro</a></p>
        </div>
      </div>
    </section>
  );
}
