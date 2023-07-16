'use client';

import Button from '@/components/ui/button';
import useCart from '@/hooks/use-cart';
import useHasMounted from '@/hooks/use-has-mounted';
import { ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NavbarActions = () => {
  const hasMounted = useHasMounted();

  const router = useRouter();
  const cart = useCart();

  if (!hasMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-slate-950 px-4 py-2"
      onClick={() => router.push('/cart')}>
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
