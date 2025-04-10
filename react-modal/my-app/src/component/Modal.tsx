import { UseRef, ReactNode, useEffect, RefObject } from 'react';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }, Props) {
const modal = useRef<HTMLDialogElement, Props>(null);

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
}
