export default function Navbar({ children, className, onClick }) {
  return (
    <nav onClick={onClick} className={className}>
      {children}
    </nav>
  );
}
