// components/ui/Button.js
const Button = ({ children, className }) => {
  return (
    <button className={`px-4 py-2 rounded ${className}`}>
      {children}
    </button>
  );
};

export default Button;
