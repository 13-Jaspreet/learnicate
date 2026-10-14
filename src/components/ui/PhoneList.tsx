import { contact } from "@/data/contact";

interface PhoneListProps {
  className?: string;
  linkClassName?: string;
}

export function PhoneList({
  className = "space-y-1",
  linkClassName = "transition-colors hover:text-gold",
}: PhoneListProps) {
  return (
    <div className={className}>
      {contact.phones.map((phone) => (
        <a
          key={phone.display}
          href={`tel:${phone.tel}`}
          className={`block ${linkClassName}`}
        >
          {phone.display}
        </a>
      ))}
    </div>
  );
}
