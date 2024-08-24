import PDFList from './components/PDFList';
import { Data } from './data/PDFListData';
import IPDFList from './models/PDFList.model';



function App() {
  const data: IPDFList[] = Data;
  return (

    <div className="small-space ">
      <div className='container'>
        <h1 className='main-title'>PDF Reader with Searching and Navigating</h1>
        <PDFList lists={data} />
      </div>
    </div>
  );
}

export default App;
