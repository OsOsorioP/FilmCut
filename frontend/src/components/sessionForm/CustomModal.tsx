import Form from './Form';

interface CustomModalProps {
  show: boolean;
  onClose: () => void;
}

export default function CustomModal({ show, onClose }: CustomModalProps) {
  if (!show) return null;

  return (
    <div className="absolute flex top-0 bottom-0 left-0 right-0 min-h-[100vh] items-center justify-center z-50">
      <div className="absolute bg-black opacity-50"></div>
      <div className="bg-transparent border backdrop-blur-[47px] p-8 rounded-lg z-10 w-[1000px] h-[600px]">
        <Form onClose={onClose} />
      </div>
    </div>
  );
};
