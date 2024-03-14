'use client';

import { StoreModal } from '@/components/modals/store-modal';
import { useEffect, useState } from 'react';

// this part of code is used to suppress hydration errors
// Can store all potential modal, (inserted insided root layout page),
// which renders on condition (call the hook)

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <StoreModal />
    </>
  );
}
