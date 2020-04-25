
const datas = [
    {
        name: "乱数の比較",
        alert: [],
        url: "./RandomNumber/RandomNumber.html",
        description: "一様乱数，正規乱数，指数乱数を比較する教材です．",
        tag: ["アニメーション"]
    },
    {
        name: "モンテカルロ法",
        alert: [],
        url: "./montecarlo/montecarlo.html",
        description: "モンテカルロ法を使って円の面積，球の体積，超球体の体積などを求める教材です．",
        tag: [ "アニメーション"]
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
        if( element == "spk" ) return `<img src="images/spk_wb.svg" class="icon" title="音が出ます"　alt="音が出ます"></img>`;
        if( element == "mic" ) return `<img src="images/mic_wb.svg" class="icon" title="音声入力を使用します" alt="音声入力を使用します"></img>`;
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