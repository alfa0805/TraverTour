function Modal({ title, setModal }) {
  setTimeout(() => {
    setModal(false);
  }, 2000);
  return (
    <div className="flex items-center align-middle justify-center m-0 p-0 md:h-[50px] md:w-[400px] z-50080 top-5 right-5 bg-white border-2 border-gray-300 rounded-lg shadow-lg fixed">
      <h2 className="text-lg font-semibold text-center p-0 m-0">{title}</h2>
    </div>
  );
}

export default Modal;
