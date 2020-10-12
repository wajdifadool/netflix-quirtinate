// Get button clicked
const button_plus = document.querySelectorAll('.faq-question');

button_plus.forEach((item, i) => {
  item.addEventListener('click', function(item , i){
    const content = item.target.parentElement.children[1];
    //Manipulate Svg Icon
    //Defind Svg Icon
    console.log(i);
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      close_all_items(item);
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

function close_all_items(item_passed) {
  // Collapse all expanded List items
  const list_items = document.querySelectorAll('.faq-answer')
  list_items.forEach((item, i) => {
    const inner_text = item;
    inner_text.style.maxHeight = null
  });
}
