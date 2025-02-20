import IPDFList from "../models/PDFList.model";
import PDFListItem from "./PDFListItem";

interface PDFLists {
  lists: IPDFList[]
}

const PDFList: React.FC<PDFLists> = ({ lists }: PDFLists) => {
  return (
    <div className="grid">
      {lists?.map((list, i) => {
        return <PDFListItem key={i} title={list.title} url={list.url} />
      })}

    </div>
  )
}

export default PDFList