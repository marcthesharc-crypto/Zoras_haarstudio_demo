import { Clock } from 'lucide-react';

const hours = [
  { day: 'Montag', time: '9:00 - 20:00' },
  { day: 'Dienstag', time: '9:00 - 20:00' },
  { day: 'Mittwoch', time: '9:00 - 20:00' },
  { day: 'Donnerstag', time: '9:00 - 20:00' },
  { day: 'Freitag', time: '9:00 - 20:00' },
  { day: 'Samstag', time: '9:00 - 20:00' },
];

export default function Oeffnungszeiten() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Öffnungszeiten & Anfahrt</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Unsere Öffnungszeiten</h3>
            </div>
            <div className="space-y-3">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center p-4 bg-white rounded-lg border"
                >
                  <span className="font-medium">{item.day}</span>
                  <span className="text-muted-foreground">{item.time}</span>
                </div>
              ))}
              <div className="p-4 bg-white rounded-lg border">
                <span className="font-medium">Sonntag</span>
                <span className="text-muted-foreground ml-4">Geschlossen</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">So finden Sie uns</h3>
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-medium">
              Google Maps wird hier eingebettet
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
