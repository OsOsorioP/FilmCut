"use client"
import { useModal } from '@/context/ModalContext';
import Form from './Form';

export default function CustomModal() {

  const {isOpen} = useModal();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex w-[100vw] h-[100vh] md:h-[100vh] items-center justify-center z-[1000]"
    >
      <div
        className="bg-transparent border backdrop-blur-[47px] p-8 rounded-lg w-[90vw] h-[90vh] z-[999]"
      >
        <Form />
      </div>
    </div>
  );
};
