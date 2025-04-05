import { forwardRef, ReactNode, useEffect, RefObject } from 'react';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = forwardRef<HTMLDialogElement, Props>(
  ({ children, isOpen, onClose }, ref) => {
    useEffect(() => {
      const dialog = ref as RefObject<HTMLDialogElement>;

      if (dialog && dialog.current) {
        if (isOpen) {
          dialog.current.showModal();
        } else {
          dialog.current.close();
        }

        const handleClose = () => {
          onClose();
        };

        dialog.current?.addEventListener('close', handleClose);

        return () => {
          dialog.current?.removeEventListener('close', handleClose);
        };
      }
    }, [isOpen, ref, onClose]);

    return <dialog ref={ref}>{children}</dialog>;
  }
);

export default Modal;
