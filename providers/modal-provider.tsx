'use client';
import PreviewModal from '@/components/preview-modal';
import useHasMounted from '@/hooks/use-has-mounted';

const ModalProvider = () => {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
