import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Kontakt() {
  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontakt</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vereinbaren Sie Ihren Termin oder kontaktieren Sie uns bei Fragen
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form action="#" className="space-y-6 mb-8">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Ihr vollständiger Name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+49 123 4567890"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Nachricht</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Teilen Sie uns Ihren Terminwunsch oder Ihre Frage mit..."
                rows={5}
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Nachricht senden
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">Oder kontaktieren Sie uns direkt via WhatsApp</p>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
