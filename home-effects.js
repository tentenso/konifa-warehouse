(function(){
  function setupHomeEffects(){
    const root=document.querySelector('[data-home-effects]');
    if(!root)return;
    const nav=root.querySelector('[data-home-effects-nav]');
    const video=root.querySelector('[data-home-effects-video]');
    const code=root.querySelector('[data-home-effects-code]');
    const name=root.querySelector('[data-home-effects-name]');
    const description=root.querySelector('[data-home-effects-description]');
    const productSection=document.querySelector('.product-center-section');
    if(productSection)productSection.before(root);
    const visuals=Array.from({length:4},(_,index)=>{
      const number=String(index+1).padStart(2,'0');
      return{
        number,
        src:`assets/cases/effects/effect-${number}.mp4`,
        zh:`案例效果图 ${number}`,
        en:`Case visual ${number}`,
        descZh:'仓储项目效果方案展示',
        descEn:'Warehouse project visual reference'
      };
    });
    const languageMarkup=(zh,en)=>`<span class="zh">${zh}</span><span class="en">${en}</span>`;
    nav.innerHTML=visuals.map((item,index)=>`<button type="button" class="home-effects-tab${index===0?' is-active':''}" data-home-effects-tab="${index}" role="tab" aria-selected="${index===0?'true':'false'}"><span class="home-effects-tab-index">${item.number}</span><span class="home-effects-tab-copy"><strong>${languageMarkup(item.zh,item.en)}</strong><small>${languageMarkup(item.descZh,item.descEn)}</small></span><span class="home-effects-tab-arrow" aria-hidden="true">↗</span></button>`).join('');
    const activate=index=>{
      const item=visuals[index];
      nav.querySelectorAll('[data-home-effects-tab]').forEach((tab,tabIndex)=>{
        const active=tabIndex===index;
        tab.classList.toggle('is-active',active);
        tab.setAttribute('aria-selected',String(active));
      });
      code.textContent=`VISUAL / ${item.number}`;
      name.innerHTML=languageMarkup(item.zh,item.en);
      description.innerHTML=languageMarkup(item.descZh,item.descEn);
      video.pause();
      video.src=item.src;
      video.load();
      const play=video.play();
      if(play&&typeof play.catch==='function')play.catch(()=>{});
    };
    nav.addEventListener('click',event=>{
      const tab=event.target.closest('[data-home-effects-tab]');
      if(tab)activate(Number(tab.dataset.homeEffectsTab));
    });
    activate(0);
    const updateSectionNumbers=()=>{
      const labels=[
        ['.product-center-section .section-label','05 / PRODUCT CENTER'],
        ['.partners-home-section .section-label','06 / PARTNER CLIENTS'],
        ['.service-band .section-label','07 / DELIVERY FLOW']
      ];
      labels.forEach(([selector,text])=>{const element=document.querySelector(selector);if(element)element.textContent=text;});
    };
    updateSectionNumbers();
  }
  document.addEventListener('DOMContentLoaded',setupHomeEffects);
})();
