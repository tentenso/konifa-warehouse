(function(){
  function setupHomeConsult(){
    const casesSection=document.querySelector('.home-cases');
    const effectsSection=document.querySelector('.home-effects-section');
    if(!casesSection&&!effectsSection)return;
    const section=document.createElement('section');
    section.className='home-consult-section section';
    section.setAttribute('data-home-consult','');
    section.innerHTML='<div class="container"><div class="home-consult-inner"><div class="home-consult-copy"><h2><span class="zh">专业仓储规划，<em>从一次咨询开始</em></span><span class="en">Better warehouse planning starts with <em>one consultation.</em></span></h2><p><span class="zh">告诉我们您的仓库面积、货物类型和存取需求，我们将为您匹配合适的仓储设备方案。</span><span class="en">Share your warehouse size, goods and handling needs. We will help shape the right storage equipment plan.</span></p></div><a class="button button-orange home-consult-button" href="contact.html"><span class="zh">在线咨询</span><span class="en">Online consultation</span><span>↗</span></a></div></div>';
    if(casesSection)casesSection.after(section);
    else effectsSection.before(section);
  }
  document.addEventListener('DOMContentLoaded',setupHomeConsult);
})();
