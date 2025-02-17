export default function Card({ children, className }) {
    return <div className={`rounded-lg shadow-md ${className}`}>{children}</div>;
  }
  