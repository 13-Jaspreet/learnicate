import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-near-black">
      <div className="flex items-center justify-center px-5 py-14 sm:py-16">
        <Logo variant="full" theme="dark" size="lg" />
      </div>
    </footer>
  );
}
