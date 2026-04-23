function Footer() {
  return (
    <footer className="bg-slate-900 text-white flex items-center justify-center h-50">
      <p>
        <span className="font-bold text-sky-400">ToDo</span> @{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
