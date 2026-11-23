(function(){
  function setupHomeProducts(){
    const section=document.querySelector('.product-center-section');
    if(!section)return;
    const homeAbout=document.querySelector('.home-about');
    if(homeAbout)homeAbout.after(section);
    const categories=[
      {
        key:'pallet',
        zh:'托盘类货架',
        en:'Pallet racking',
        items:[
          ['heavy','仓储货架','Pallet racking','适合托盘存储与高频出入库','For pallet storage and frequent movements','assets/konifa/hero-racking.jpg','racking'],
          ['drivein','贯通货架','Drive-in racking','适合整托盘批量存储','For dense batch pallet storage','assets/konifa/drive-in-racking.jpg','racking'],
          ['shuttle','穿梭货架','Radio shuttle racking','适合高密度与冷库仓储','For high-density and cold-room storage','assets/konifa/shuttle-racking.jpg','racking'],
          ['stacking','堆垛架','Stacking racks','灵活堆叠，便于叉车作业','Flexible stacking for forklift handling','assets/konifa/stacking-rack.jpg','racking']
        ]
      },
      {
        key:'bin',
        zh:'料箱类货架',
        en:'Bin storage',
        items:[
          ['medium','中型货架','Medium-duty shelving','适合料箱、纸箱与零配件拣选','For totes, cartons and parts picking','assets/konifa/warehouse-mezzanine.jpg','racking'],
          ['cage','仓储笼','Storage cages','适合散件周转与集中存储','For loose parts and returnable storage','assets/konifa/storage-cage.jpg','logistics'],
          ['plastic','塑料托盘','Plastic pallets','适配货架与自动化物流系统','For racks and automated logistics','assets/konifa/plastic-pallet.jpg','logistics'],
          ['steelpallet','钢托盘','Steel pallets','适合重载、冷库与出口周转','For heavy loads, cold rooms and export','assets/konifa/pallets.jpg','logistics']
        ]
      },
      {
        key:'other',
        zh:'其他货架',
        en:'Other racking',
        items:[
          ['cantilever','悬臂货架','Cantilever racking','适合管材、型材等长料存储','For pipes, profiles and long loads','assets/konifa/cantilever-racking.jpg','racking'],
          ['platform','钢平台','Steel platform','扩展仓库和厂房的可用空间','Expands usable warehouse and factory space','assets/konifa/steel-platform.jpg','platform'],
          ['mezzanine','阁楼货架','Mezzanine racking','利用库房上部空间，支持多层拣选','Uses upper volume for multi-level picking','assets/konifa/mezzanine-racking.jpg','platform'],
          ['stacking','堆垛架','Stacking racks','适配灵活存储与周转场景','For flexible storage and handling','assets/konifa/stacking-rack.jpg','racking']
        ]
      },
      {
        key:'automation',
        zh:'自动化设备',
        en:'Automation',
        items:[
          ['automated','自动化仓储','Automated storage','面向高密度和智能化升级','For high-density and smart upgrades','assets/konifa/automated-warehouse.jpg','racking'],
          ['shuttle','穿梭货架','Radio shuttle racking','穿梭车协助托盘自动搬运','Shuttle-assisted pallet handling','assets/konifa/shuttle-racking.jpg','racking'],
          ['medium','拣选货架','Picking shelving','支持人工拣选与料箱管理','For manual picking and bin management','assets/konifa/warehouse-mezzanine.jpg','racking'],
          ['plastic','周转托盘','Plastic pallets','适配 AGV、输送线与自动化立库','For AGVs, conveyors and automated warehouses','assets/konifa/plastic-pallet.jpg','logistics']
        ]
      }
    ];
    const languageMarkup=(zh,en)=>`<span class="zh">${zh}</span><span class="en">${en}</span>`;
    const render=category=>{
      const cards=category.items.map((item,index)=>`<a class="home-product-card" href="products.html#${item[6]}"><div class="home-product-card-media"><img src="${item[5]}" alt="${item[1]} / ${item[2]}" /></div><div class="home-product-card-body"><small>${String(index+1).padStart(2,'0')} / ${category.key.toUpperCase()}</small><h3>${languageMarkup(item[1],item[2])}</h3><p>${languageMarkup(item[3],item[4])}</p><span class="home-product-card-link"><span class="zh">了解更多</span><span class="en">Learn more</span><b>↗</b></span></div></a>`).join('');
      return `<div class="home-product-grid">${cards}</div>`;
    };
    section.innerHTML=`<div class="container"><div class="home-product-heading"><h2><span class="zh">核心产品</span><span class="en">Core products</span></h2><div class="home-product-heading-side"><div class="home-product-tabs" role="tablist" aria-label="产品分类 / Product categories">${categories.map((category,index)=>`<button type="button" class="home-product-tab${index===0?' is-active':''}" data-home-product-tab="${category.key}" role="tab" aria-selected="${index===0?'true':'false'}">${languageMarkup(category.zh,category.en)}</button>`).join('')}</div></div></div><div data-home-product-panel>${render(categories[0])}</div><a class="text-link home-product-more" href="products.html"><span class="zh">查看全部产品</span><span class="en">View all products</span><span>↗</span></a></div>`;
    const panel=section.querySelector('[data-home-product-panel]');
    section.querySelectorAll('[data-home-product-tab]').forEach(tab=>tab.addEventListener('click',()=>{
      const category=categories.find(item=>item.key===tab.dataset.homeProductTab)||categories[0];
      section.querySelectorAll('[data-home-product-tab]').forEach(button=>{
        const active=button===tab;
        button.classList.toggle('is-active',active);
        button.setAttribute('aria-selected',String(active));
      });
      panel.innerHTML=render(category);
    }));
  }
  document.addEventListener('DOMContentLoaded',setupHomeProducts);
})();
