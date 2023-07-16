'use client';

import Button from '@/components/ui/button';
import useHasMounted from '@/hooks/use-has-mounted';
import { ShoppingBag } from 'lucide-react';

const NavbarActions = () => {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-slate-950 px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
