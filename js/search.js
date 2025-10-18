(function(){
  const MAX_RESULTS = 8;
  let index = [];
  let inputEl, resultsEl, formEl;
  let activeIndex = -1;

  function normalize(str){
    return (str || '').toString().toLowerCase();
  }

  function buildIndex(){
    // Support both window.places and global `places` (const/let not on window)
    const source = (typeof window !== 'undefined' && window.places)
      ? window.places
      : (typeof places !== 'undefined' ? places : null);
    if (!source || !Array.isArray(source.touristSpots)) return;
    index = source.touristSpots.map(s => ({
      id: s.id,
      name: s.name,
      description: s.description || '',
      thumbnail: s.thumbnail || ''
    }));
  }

  function render(results){
    if (!resultsEl) return;
    if (!results.length){
      resultsEl.innerHTML = '';
      resultsEl.classList.remove('show');
      return;
    }

    const html = results.map((r,i)=> `
      <div class="suggestion-item${i===activeIndex? ' active':''}" data-id="${r.id}">
        <div class="d-flex align-items-center gap-2">
          ${r.thumbnail ? `<img src="${r.thumbnail}" alt="" style="width:32px;height:32px;object-fit:cover;border-radius:4px;">` : ''}
          <div>
            <div class="fw-bold">${r.name}</div>
            <div class="small text-muted text-truncate" style="max-width:380px;">${r.description}</div>
          </div>
        </div>
      </div>`).join('');
    resultsEl.innerHTML = html;
    resultsEl.classList.add('show');
  }

  function search(q){
    const n = normalize(q);
    if (!n) return [];
    return index.filter(item => normalize(item.name).includes(n) || normalize(item.description).includes(n)).slice(0, MAX_RESULTS);
  }

  function navigateTo(id){
    if (!id) return;
    window.location.href = `details.html?place=${encodeURIComponent(id)}`;
  }

  function onInput(){
    activeIndex = -1;
    const q = inputEl.value;
    const results = search(q);
    render(results);
  }

  function onKeyDown(e){
    const items = Array.from(resultsEl.querySelectorAll('.suggestion-item'));
    switch(e.key){
      case 'ArrowDown':
        e.preventDefault();
        activeIndex = (activeIndex + 1) % items.length;
        render(search(inputEl.value));
        break;
      case 'ArrowUp':
        e.preventDefault();
        activeIndex = (activeIndex - 1 + items.length) % items.length;
        render(search(inputEl.value));
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0 && items.length){
          const id = items[activeIndex].getAttribute('data-id');
          navigateTo(id);
        } else {
          // No active selection, search and go to first match
          if (!index.length) buildIndex();
          const results = search(inputEl.value);
          if (results.length) navigateTo(results[0].id);
        }
        break;
      case 'Escape':
        resultsEl.classList.remove('show');
        break;
    }
  }

  function onClickSuggestion(e){
    const item = e.target.closest('.suggestion-item');
    if (!item) return;
    const id = item.getAttribute('data-id');
    navigateTo(id);
  }

  function onSubmit(e){
    e.preventDefault();
    const results = search(inputEl.value);
    if (results.length){
      navigateTo(results[0].id);
    }
  }

  function setup(){
    formEl = document.getElementById('nav-search-form');
    inputEl = document.getElementById('nav-search-input');
    resultsEl = document.getElementById('nav-search-results');
    if (!formEl || !inputEl || !resultsEl) return;

  buildIndex();

    inputEl.addEventListener('input', onInput);
    inputEl.addEventListener('keydown', onKeyDown);
    resultsEl.addEventListener('click', onClickSuggestion);
    formEl.addEventListener('submit', onSubmit);

    // hide suggestions when clicking away
    document.addEventListener('click', (e)=>{
      if (!formEl.contains(e.target)){
        resultsEl.classList.remove('show');
      }
    });
  }

  window.addEventListener('DOMContentLoaded', setup);
})();
