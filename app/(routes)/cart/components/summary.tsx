'use client';

import Button from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAllItems = useCart((state) => state.removeAllItems);

  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAllItems();
    }

    if (searchParams.get('cancelled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAllItems]);

  const onCheckout = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = res.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-slate-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-slate-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-slate-200 pt-4">
          <div className="text-base font-medium text-slate-900">
            Order total
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
