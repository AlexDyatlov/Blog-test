$(function(){

  const blogs = document.querySelector('.blog__items');
  const moreBtn = document.querySelector('.blog-btn');
  let startNum = 0;
  let endNum = 6;

  async function getContent() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await responce.json();
    return data;
  }

  $(moreBtn).on('click', async function(e) {
    const mrd = await getContent();

    const content = mrd.map(function(data, elem) {	
      return `
        <div class="blog__item">
          <h2 class="blog__item-title">
            ${data.title}
          </h2>
          <input type="checkbox" class="read-more-state" id="post-${elem}" />
          <p class="blog__item-text">
            ${data.body} <span class="blog__item-more">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem itaque ducimus unde harum vitae quam provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sapiente odit laborum tempore sed quaerat a aliquam? Corrupti dolorum, tempora iste qui modi consectetur explicabo quia vel reiciendis nesciunt? Id!</span>
          </p>
          <label for="post-${elem}" class="blog__item-toggle"></label>
        </div>
      `
      }).slice(startNum, startNum+endNum).join('');

    const el = $(content);
    $(blogs).append(el)
    el.on('click', function() {
    });
    startNum+= 6;
    
  });

});