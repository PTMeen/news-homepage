import MenuSidebar from './components/MenuSidebar';
import Navbar from './components/Navbar';
import New from './components/New';
import Ranking from './components/Ranking';
import Web3 from './components/Web3';

export default function App() {
  return (
    <>
      <Navbar />
      <main className='w-[90%] max-w-[1240px] mx-auto'>
        <div className='pb-8 lg:pb-16 grid grid-cols-1 lg:grid-cols-3 lg:gap-8'>
          <Web3 />
          <New />
        </div>
        <Ranking />
      </main>
      <div className='text-center my-4 text-grayishBlue text-sm lg:text-lg'>
        Challenge by
        <a
          className='text-softOrange ml-2'
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'>
          Frontend Mentor
        </a>
        . Coded by
        <a className='text-softOrange ml-2' href='#'>
          PTMeen
        </a>
        .
      </div>
    </>
  );
}
