import AnimatedTabs from './AnimatedTabs';
import Dock from './Dock';
import imgUrl from './assets/macos-ventura.jpg';

const App = () => {
  return (
    <div className='flex flex-col w-full h-full pb-5 items-center justify-between bg-slate-950'>
      <img
        className='fixed top-0 left-0 bottom-0 right-0 w-full h-full object-fill'
        src={imgUrl}
        alt=''
      />
      <AnimatedTabs />
      <main className='flex flex-col flex-1 w-full h-full'></main>
      <Dock />
    </div>
  );
};

export default App;
