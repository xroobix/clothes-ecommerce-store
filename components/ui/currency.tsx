'use client';

import useHasMounted from '@/hooks/use-has-mounted';
import { formatter } from '@/lib/utils';

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
