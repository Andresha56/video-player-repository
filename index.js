


let TopSecSmImgs = document.querySelectorAll(".topImgCon img");
let video = document.getElementById("playVideo");
let BigImgTxt = document.getElementById("content-info");
let CloseScreenBtn = document.getElementById("playVideo");
let PlayVideoBtn= document.getElementById('PlayVideoBtn')
let BigImg = document.getElementById("F-img");
PlayVideoBtn.addEventListener("click",()=>{
  if(BigImg.children[0].alt== "snake"){
    video.children[0].children[0].src = "https://www.youtube.com/embed/CaLYRpvWUGQ";
    video.style.display = "block";
    console.log('snake')
  }
})

function img(e) {
  BigImg.children[0].src = (e.children[0].src);
  PlayVideoBtn.addEventListener("click", () => {
    video.children[0].children[0].src = "";
    if (e.children[0].alt == "deer") {
      video.children[0].children[0].src = "https://www.youtube.com/embed/n26DnHOTDvY";
      video.style.display = "block";
    }
    else if (e.children[0].alt == "butterfly") {
      video.children[0].children[0].src = "https://www.youtube.com/embed/aBfJtTm_XD4";
      video.style.display = "block";
    }
    else if (e.children[0].alt == "seahorse") {
      video.children[0].children[0].src = "https://www.youtube.com/embed/IuFsHUG53jY";
      video.style.display = "block";
    }
    else if (e.children[0].alt == "turtoise") {
      video.children[0].children[0].src = "https://www.youtube.com/embed/WcQkn8VAgHY";
      video.style.display = "block";
    }
    else if (e.children[0].alt == "peacock") {
      video.children[0].children[0].src = "https://www.youtube.com/embed/iXDg4_MGshw";
      video.style.display = "block";
    }
    else if (e.children[0].alt == "squirrel") {
      video.children[0].children[0].src = "https://www.youtube.com/embed/RnTWlY29X-A";
      video.style.display = "block";
    }

  })
}
CloseScreenBtn.addEventListener("click", () => {
  video.style.display = "none";
  video.children[0].children[0].src = "";
})

function LordTigerImgs() {
  TopSecSmImgs[0].src = "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGlnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  TopSecSmImgs[1].src = "https://images.unsplash.com/photo-1615824996195-f780bba7cfab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGlnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  TopSecSmImgs[2].src = "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGlnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  TopSecSmImgs[3].src = "https://images.unsplash.com/photo-1615474286632-e31ac3633d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRpZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  TopSecSmImgs[4].src = "https://plus.unsplash.com/premium_photo-1661963380682-8fcaf8ca7650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRpZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[5].src = "https://images.unsplash.com/photo-1500635523027-2f05e513f066?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
};

function LoadbirdImgs() {
  TopSecSmImgs[0].src = "https://images.unsplash.com/photo-1551668231-6a07c2b7d544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[1].src = "https://images.unsplash.com/photo-1549608276-5786777e6587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmlyZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[2].src = "https://images.unsplash.com/photo-1615827113061-ff4ca1736907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[3].src = "https://images.unsplash.com/photo-1529690086133-c8e4bc9e1f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[4].src = "https://images.unsplash.com/photo-1584552356827-84601899716c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYwfHxiaXJkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[5].src = "https://images.unsplash.com/photo-1526401415661-5a755bef0246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
};


function LoadpinguinImgs() {
  TopSecSmImgs[0].src = "https://images.unsplash.com/photo-1596544701302-2a61b8bbca35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGluZ3VpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[1].src = "https://images.unsplash.com/photo-1613575607467-83d3ad295710?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBpbmd1aW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[2].src = "https://images.unsplash.com/photo-1638704960772-12cf64da3701?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBpbmd1aW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[3].src = "https://images.unsplash.com/photo-1507754681446-38446450bef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBpbmd1aW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[4].src = "https://images.unsplash.com/photo-1603617385189-cee5d82d5032?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBpbmd1aW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[5].src = "https://images.unsplash.com/photo-1541336528065-8f1fdc435835?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
}

function LondKangarooImgs() {
  TopSecSmImgs[0].src = "https://images.unsplash.com/photo-1606084908579-b930b8cfc37b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGthbmdhcm9vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[1].src = "https://images.unsplash.com/photo-1590927938297-fe8dd28ca144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGthbmdhcm9vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[2].src = "https://images.unsplash.com/photo-1519101279298-f92c1daf1abb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGthbmdhcm9vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[3].src = "https://images.unsplash.com/photo-1593936665706-dda72782f4f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGthbmdhcm9vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[4].src = "https://images.unsplash.com/photo-1590984492920-6c9c52b41a32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGthbmdhcm9vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[5].src = "https://images.unsplash.com/photo-1597232698126-508a1cb8a347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGthbmdhcm9vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
}
function LoadFoxImgs() {
  TopSecSmImgs[0].src = "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm94fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[1].src = "https://images.unsplash.com/photo-1621206593424-6e4e8f6336e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm94fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[2].src = "https://images.unsplash.com/photo-1602483914471-907994df5618?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZveHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[3].src = "https://images.unsplash.com/photo-1621383569754-5a8744581af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZveHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[4].src = "https://images.unsplash.com/photo-1634521991558-a1f4dbd641db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZveHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    TopSecSmImgs[5].src = "https://images.unsplash.com/photo-1559538619-79636b249e31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGZveHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}

function LoadTigerVideo() {
  TopSecSmImgs[0] = "https://www.youtube.com/embed/YZ13qxi2UVg";
}

let BtmImg = document.getElementById("buttom-img-sec");

BtmImg.addEventListener("click", (a) => {
  if (a.targe !== a.currentTarget) {
    SmImg = (a.path[3].children[0]);
    if (SmImg.alt == "tiger") {
      console.log(SmImg.src);
      document.getElementById("F-img").children[0].src = SmImg.src;
      LordTigerImgs();
    }
    else if (SmImg.alt == "bird") {
      document.getElementById("F-img").children[0].src = SmImg.src;
      LoadbirdImgs();

    }
    else if (SmImg.alt == "penguin") {
      document.getElementById("F-img").children[0].src = SmImg.src;
      LoadpinguinImgs();
    }
    else if (SmImg.alt == 'Kangaroo') {
      document.getElementById("F-img").children[0].src = SmImg.src;
      LondKangarooImgs();
    }
    else if (SmImg.alt == 'fox') {
      document.getElementById("F-img").children[0].src = SmImg.src;
      LoadFoxImgs()
    }
    // -------------loadVideos---------------
    PlayVideoBtn.addEventListener("click", () => {
      if (SmImg.alt == "tiger") {
        video.children[0].children[0].src = "https://www.youtube.com/embed/YZ13qxi2UVg";
        video.style.display = "block";
        if (TopSecSmImgs[0]) {
          video.children[0].children[0].src = "https://www.youtube.com/embed/iz3OYaLYnFY";
          video.style.display = "block";
        }
        if (TopSecSmImgs[1]) {
          video.children[0].children[0].src = "https://www.youtube.com/embed/zNMh9zAx20Q";
          video.style.display = "block";
          console.log(TopSecSmImgs[1])
        }
      }


    })
  }
})