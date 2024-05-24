import Link from "next/link";
import NavigationLinks from '@/navigation';

const Navigation = () => {
  return (
    <nav>
        {NavigationLinks.map((link) => (
            <Link key={link.id} href={link.path}>{link.label}</Link>
        ))}
      
    </nav>
  );
};

export default Navigation;