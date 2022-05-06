let gamecontents = document.querySelector('.gamecontent')
const product =[ 
    {
        'id' : 1,
        'ingame':'Mở quà',
        'img': './assets/imggame/moqua.png',
        'title':'Add matching numbers to build up to the goal of 10, be careful not to fill the puzzle screen! The more additions you make.'
    },
    {
        'id' : 2,
        'ingame':'Quà bay',
        'img': './assets/imggame/QuaBay.png',
        'title':'Drift your way around your office desk in a mini street racer. Collect as many tokens but watch out for the explosives! '
    },
    {
        'id' : 3,
        'ingame':'Vòng quay may mắn',
        'img': './assets/imggame/VQMM.jpg',
        'title':'Drift your way around your office desk in a mini street racer. Collect as many tokens but watch out for the explosives! '    },
    {
        'id' : 4,
        'ingame':'Giải cứu thỏ ngọc',
        'img': './assets/imggame/gctn.png',
        'title':'Drift your way around your office desk in a mini street racer. Collect as many tokens but watch out for the explosives! '    },
    {
        'id' : 5,
        'ingame':'Lật hình',
        'img': './assets/imggame/lathinh.png',
        'title':'Drift your way around your office desk in a mini street racer. Collect as many tokens but watch out for the explosives! '    },
    {
        'id' : 6,
        'ingame':'Vòng quay cá mập',
        'img': './assets/imggame/quaycamap.jpg',
        'title':'Drift your way around your office desk in a mini street racer. Collect as many tokens but watch out for the explosives! '    }
]
function render() {
    var html = "";
    product.map((product) => {
      html += `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 ">
                    <div class="gamecontent">
                        <div class="gamecontent-img" style="
                        background-image: url(${product.img})"></div>
                        <div class ="gamecontent-tag">
                            <div class="gamecontent-title">${product.ingame}</div>
                            <div class="gamecontent-intro">${product.title}</div>
                            <div><a href="#">Chơi game ></a> </div>
                        </div>
                    </div>
                </div>`;
    });
   gamecontents.innerHTML += html;
  }
  render();