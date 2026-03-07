export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Scarlet Tech Wizards. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://linkedin.com/in/jeycyn-jeff-3ba769313/" target="_blank" className="text-red-600 hover:text-yellow-400 transition"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/Jeycyn" target="_blank" className="text-red-600 hover:text-yellow-400 transition"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </footer>
  );
}