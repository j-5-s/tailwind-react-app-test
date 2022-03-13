import { useEffect } from 'react';
import generateTailwind from 'browser-jit-generate-tailwindcss';

// import foo from 'pkg';
import logo from './logo.svg';
import './App.css';

const html =  `
 <div data-dynamic-tailwind-css class="bg-[#eee]">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span class="block">Demo Dynamic Tailwind</span>
                <span class="block text-red-600">Render Tailwind in the Browser</span>
            </h2>
            <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div class="inline-flex">
                    <a href="https://github.com/mhsdesign/browser-jit-generate-tailwindcss" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-red-600 hover:bg-red-700">Github</a>
                </div>
                <div class="ml-3 inline-flex">
                    <a href="https://github.com/mhsdesign/" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-red-600 bg-white hover:bg-red-50">Me on Github</a>
                </div>
            </div>
        </div>
    </div>
`

function App() {
  useEffect(() => {
    // console.log(generateTailwind);
    // console.log('pkg', foo())
    (async () => {


      const css = await generateTailwind(`
                @tailwind components;
                @tailwind utilities;
            `, html)

      console.log(css)
    })()



  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
