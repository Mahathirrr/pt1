import { motion } from 'framer-motion';
import { menuItems } from '../../constants/menuItems';

export default function DesktopMenu() {
  return (
    <div className="hidden md:flex space-x-8">
      {menuItems.map((item, index) => (
        <motion.a
          key={item.href}
          href={item.href}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          {item.label}
        </motion.a>
      ))}
    </div>
  );
}