const Footer = ({ length }) => {
  return (
    <footer className="container bg-primary text-white d-flex justify-content-center align-items-center">
      <p>
        {length} List {length === 1 ? "item" : "items"}
      </p>
    </footer>
  );
};

export default Footer;
