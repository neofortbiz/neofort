import Link from 'next/link';

export const metadata = { title: 'Blog Termopane | Neofort', description: 'Articole despre tâmplărie PVC, aluminiu, geam termopan și soluții de izolare.' };

export default function BlogPage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Termopane Neofort</h1>
          <p className="text-gray-300">Articole și noutăți despre tâmplărie PVC, aluminiu și izolare termică</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-600 text-lg mb-8">Articolele blog-ului vor fi disponibile în curând.</p>
          <Link href="../contact" className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
            Contactează-ne
          </Link>
        </div>
      </section>
    </>
  );
}
