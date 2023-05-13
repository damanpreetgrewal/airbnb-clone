'use client';

import useRentModal from '@/app/hooks/useRentModal';
import Modal from './Modal';

const RentModal = () => {
  const RentModal = useRentModal();

  return (
    <Modal
      isOpen={RentModal.isOpen}
      onClose={RentModal.onClose}
      onSubmit={RentModal.onClose}
      title="Airbnb your home!"
    />
  );
};
export default RentModal;
