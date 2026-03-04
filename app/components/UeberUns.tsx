export default function UeberUns() {
  return (
    <section id="ueber-uns" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Über uns</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Seit über 15 Jahren sind wir Ihr vertrauensvoller Friseur im Herzen von Schwabing.
              Unser erfahrenes Team verbindet traditionelles Handwerk mit modernen Trends und
              neuesten Techniken.
            </p>
            <p className="text-lg leading-relaxed">
              Bei uns steht der Kunde im Mittelpunkt. Wir nehmen uns Zeit für eine persönliche
              Beratung und kreieren für Sie den perfekten Look, der zu Ihrem Typ und Lebensstil passt.
            </p>
            <p className="text-lg leading-relaxed">
              Besuchen Sie uns und erleben Sie professionelle Haarpflege in entspannter Atmosphäre.
            </p>
          </div>

          <div className="aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-medium">
            Team-Foto kommt hier
          </div>
        </div>
      </div>
    </section>
  );
}
