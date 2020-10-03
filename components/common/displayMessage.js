const displayMessage = (cssClass, message, htmlTag) => {
  const element = document.querySelector(htmlTag);
  element.innerHTML = `<div class="alert alert-${cssClass}" role="alert">${message}
                        </div>`;
};

export default displayMessage;
