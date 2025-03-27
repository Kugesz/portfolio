const languageChangeEvent = () => {
  const event = new Event("languageChange");
  window.dispatchEvent(event);
};

export default languageChangeEvent;
