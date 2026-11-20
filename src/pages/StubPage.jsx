import { Link } from "react-router";


function StubPage({ title, stage }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
        Раздел в разработке
      </p>
      <h1 className="mt-3 text-3xl font-bold text-gray-950">{title}</h1>
      <p className="mt-4 text-gray-500">
        Этот раздел будет реализован на этапе {stage}.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-lg border border-gray-200 px-6 py-3 text-sm text-gray-800 transition-colors hover:bg-gray-50"
      >
        ← На главную
      </Link>
    </section>
  );
}

export default StubPage;
