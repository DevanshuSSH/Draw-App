import { Tldraw } from '@tldraw/tldraw';
import '@tldraw/tldraw/tldraw.css';

function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white p-2 shadow-md flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-500 ">Drawing App</h1>
      </div>
      <div className="flex-grow pt-12">
        <Tldraw />
      </div>
      <footer className="bg-white p-2 shadow-md flex justify-center items-center space-x-4">
        <span className="text-gray-800">Built with ❤️ by Devanshu</span>
        <a href="https://github.com/DevanshuSSH" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/devanshu-sharma-28b6082a2/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          <i className="fas fa-globe"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
