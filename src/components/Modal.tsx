import { bookmarkPlugin } from "@react-pdf-viewer/bookmark";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { zoomPlugin } from "@react-pdf-viewer/zoom";


interface IModalProps {
  onHideModal?: () => void
  url: string,
  modalClose: any
}

const Modal = ({ url, modalClose }: IModalProps): JSX.Element => {
  const fileUrl2 = `/recources/${url}`;

  const pageNavigationPluginInstance = pageNavigationPlugin();
  const zoomPluginInstance = zoomPlugin();
  const bookmarkPluginInstance = bookmarkPlugin();

  const handlePageChange = (e: any) => {
    localStorage.setItem("current-page", `${e.currentPage}`);
  };

  const { CurrentPageInput, GoToNextPageButton, GoToPreviousPage } = pageNavigationPluginInstance;
  const { ZoomInButton, ZoomOutButton } = zoomPluginInstance;
  const { Bookmarks } = bookmarkPluginInstance;

  const currentPage = localStorage.getItem("current-page");
  const initialPage = currentPage ? parseInt(currentPage, 10) : 0;

  return (
    <div
      className="modal">
      <button
        onClick={modalClose}
        className="modal-close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="modal-content">

        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">

          <div className="rpv-core__viewer viewer-wrapper relative">
            <div className="top-bar">
              <div style={{ padding: "0px 2px" }} >
                <GoToPreviousPage />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <CurrentPageInput />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <GoToNextPageButton />
              </div>
              |
              <div style={{ padding: "0px 2px" }}>
                <ZoomInButton />
              </div>
              <div className="text-white" style={{ padding: "0px 2px" }}>
                <ZoomOutButton />
              </div>
              |
              <div style={{ padding: "0px 2px" }}>
                <Bookmarks />
              </div>
            </div>

            <div style={{ height: "720px" }}>
              <Viewer
                fileUrl={fileUrl2}
                initialPage={initialPage}
                onPageChange={handlePageChange}
                plugins={[zoomPluginInstance, pageNavigationPluginInstance, bookmarkPluginInstance]}
                defaultScale={1.5}
              />
            </div>
          </div>
        </Worker>
      </div>
    </div>
  )
}

export default Modal;