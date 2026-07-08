import { BASE } from '../lib/constants.js';
import './globals.css';

export const metadata = {
  metadataBase: new URL(BASE),
};

export default function RootLayout({ children }) {
  return children;
}
