import { useState } from "react";
import IPDFList from "../models/PDFList.model";
import Modal from "./Modal";

const PDFListItem: React.FC<IPDFList> = ({ title, url }: IPDFList) => {

  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      <div onClick={() => setShowModal(!showModal)} className='box' title="Click to details">
        <img src="/pdf.png" alt="pdf" className="w-12 mx-auto block mb-3" />
        <div className="f">
          <h6 className='text-xl mb-1'> {title} </h6>
        </div>
      </div>
      {showModal ? <Modal modalClose={() => setShowModal(false)} url={url} /> : null}
    </>
  )
}

export default PDFListItem