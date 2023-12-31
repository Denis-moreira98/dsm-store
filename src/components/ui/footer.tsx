const Footer = () => {
  return (
    <div className="mt-8 bg-accent px-8 py-4 text-sm opacity-75">
      Copyright © {new Date().getFullYear()}{" "}
      <span className="font-bold text-primary">DSM STORE</span>
    </div>
  );
};

export default Footer;
