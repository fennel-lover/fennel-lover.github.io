categoriesBarActive()
topCategoriesBarScroll()
tagsBarActive()

//分类条
function categoriesBarActive(){
  var urlinfo = window.location.pathname;
  urlinfo = decodeURIComponent(urlinfo)
  console.log(urlinfo);
  //判断是否是首页
  if (urlinfo == '/'){
    if (document.querySelector('#category-bar')){
      document.getElementById('首页').classList.add("select")
    }
  }else {
    // 验证是否是分类链接
    var pattern = /\/categories\/.*?\//;
    var patbool = pattern.test(urlinfo);
    console.log(patbool);
    // 获取当前的分类
    if (patbool) {
      var valuegroup = urlinfo.split("/");
      console.log(valuegroup[2]);
      // 获取当前分类
      var nowCategorie = valuegroup[2];
      if (document.querySelector('#category-bar')){
        document.getElementById(nowCategorie).classList.add("select");
      }
    }
  }
}

//标签条
function tagsBarActive(){
  var urlinfo = window.location.pathname;
  urlinfo = decodeURIComponent(urlinfo)
  //console.log(urlinfo);
  //判断是否是首页
  if (urlinfo == '/'){
    if (document.querySelector('#tags-bar')){
      document.getElementById('首页').classList.add("select")
    }
  }else {
    // 验证是否是分类链接
    var pattern = /\/tags\/.*?\//;
    var patbool = pattern.test(urlinfo);
    //console.log(patbool);
    // 获取当前的标签
    if (patbool) {
      var valuegroup = urlinfo.split("/");
      //console.log(valuegroup[2]);
      // 获取当前分类
      var nowTag = valuegroup[2];
      if (document.querySelector('#category-bar')){
        document.getElementById(nowTag).classList.add("select");
      }
    }
  } 
}

/*作者: Justlovesmile
链接: https://blog.justlovesmile.top/posts/2bfb1caa.html?time=1692971573304
来源: Justlovesmile's BLOG
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。*/


//鼠标控制横向滚动
function topCategoriesBarScroll(){
  if (document.getElementById("category-bar-items")){
    let xscroll = document.getElementById("category-bar-items");
  xscroll.addEventListener("mousewheel", function (e) {
    //计算鼠标滚轮滚动的距离
    let v = -e.wheelDelta / 2;
    xscroll.scrollLeft += v;
    //阻止浏览器默认方法
    e.preventDefault();
}, false);
  }
}