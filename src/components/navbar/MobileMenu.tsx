import { motion } from 'framer-motion';
import { menuItems } from '../../constants/menuItems';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:hidden py-4"
    >
      {menuItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </motion.div>
  );
}