
const datas = [
    {
        name: "最適経路問題（2opt改善法）",
        alert: [  ],
        url: "./2opt/",
        description: "最近傍法と2opt改善法を比較する教材です．",
        tag: []
    },
    {
        name: "行列による座標変換",
        alert: [],
        url: "./matrix_ops/",
        description: "行列を用いて座標を拡大・縮小，回転，平行移動する様子を観察する教材です．",
        tag: []
    }, 
    {
        name: "カメラ入力による画像フィルタ",
        alert: [ "cam" ],
        url: "./camera_input/",
        description: "画像フィルタの教材で，カメラ入力に対して処理を行います．",
        tag: []
    },   
/*     {
        name: "",
        alert: [],
        url: "",
        description: "",
        tag: []
    },  */
]

/* const template = [];
template[0] = `
<article class="simulator">
<div class="simulator_header">
  <span class="simulator_title">` + name + `</span>
  <span class="icon"> ` + alert + ` </span>
  <span class="right">
    <a href="` + url + `" class="learn">学習する</a>
  </span>
</div>
<div class="description">
  <div class="left">
    <p>` + description + `</p>
  </div>
</div>
</article>` */

let output = datas.map( (data)=>{
    let alert = data.alert.map( (element) => {
        if( element == "spk" ) return `<img src="images/spk_wb.svg" class="icon" title="音が出ます" alt="音が出ます"></img>`;
        if( element == "mic" ) return `<img src="images/mic_wb.svg" class="icon" title="音声入力を使用します" alt="音声入力を使用します"></img>`;
        if( element == "cam" ) return `<img src="images/icons8-camera.svg" class="icon" title="カメラ入力を使用します" alt="カメラ入力を使用します"></img>`;
    });
    return`<article class="simulator">
<div class="simulator_header">
<span class="simulator_title">` + data.name + `</span>
<span class="right">
<span class="icons"> ` + alert.join('') + ` </span>
<a href="` + data.url + `" class="learn">学習する</a>
</span>
</div>
<div class="description">
<div class="left">
<p>` + data.description + `</p>
</div>
</div>
</article>`
});

for( let a of output ) console.log( a );
