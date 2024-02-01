'use client';

import Modal from '@/components/ui/modal';
import { UserButton } from '@clerk/nextjs';

export default function SetupPaege() {
  return (
    <div className='p-4'>
      <Modal
        title='Test'
        description='Test description'
        isOpen
        onClose={() => {}}
      >
        children
      </Modal>
    </div>
  );
}
