
const datas = [
    {
        name: "簡易シンセサイザー",
        alert: [ "spk" ],
        url: "./synthesizer/",
        description: "sin波を合成して音を生成するシミュレータです．エンベロープの調整も可能です．",
        tag: ["音声出力"]
    },
    {
        name: "ドップラー効果",
        alert: [ "spk" ],
        url: "./doppler/",
        description: "ドップラー効果を観察しながら，音が振動であることや振動数によって音の高さが変わることを学習する教材です．",
        tag: ["音声出力","アニメーション"]
    },
    {
        name: "和音",
        alert: ["spk"],
        url: "./chord/chord.html",
        description: "数学的な和音とチューニングを施した楽器の和音を,実際に聴き比べる教材です.",
        tag: [ "音声出力"]
    },
    {
        name: "音波の生成",
        alert: [],
        url: "./growth_of_soundwave/growth_of_soundwave.html",
        description: "停止していたクランクが動き出し,音波が生成される瞬間を学習するための教材です.",
        tag: ["アニメーション"]
    },
    {
        name: "波の種類",
        alert: [],
        url: "./solid_wave/solid_wave.html",
        description: "縦波・横波・弾性表面波の振動の様子を比較する教材です.",
        tag: ["アニメーション"]
    },
    {
        name: "振動の方程式",
        alert: [],
        url: "./wave_equation/wave_equation.html",
        description: "音波が伝わる際の,一部を拡大した教材です.",
        tag: ["アニメーション"]
    },
    {
        name: "二重音源による音場",
        alert: [],
        url: "./double_source/double_source.html",
        description: "2つの音源から作られる音場を再現した教材です.",
        tag: ["アニメーション"]
    },
    {
        name: "弦の振動",
        alert: [],
        url: "./StringVibration/StringVibration.html",
        description: "弦の振動の様子を観察する教材です.",
        tag: ["アニメーション"]
    },
    {
        name: "円板振動",
        alert: [],
        url: "./3d_disc/anim.html",
        description: "円板振動の様子を観察する教材です.",
        tag: ["アニメーション"]
    },
    {
        name: "ファンクションジェネレータ",
        alert: ["spk"],
        url: "./SoundGenerator/",
        description: "正弦波，三角波，矩形波などの音を出力する教材です．",
        tag: ["音声出力"]
    },    {
        name: "スペクトラム表示",
        alert: ["mic"],
        url: "./freqdraw/freqdraw.html",
        description: "音声入力をリアルタイムでフーリエ変換し,周波数成分を表示します.起動すると「マイクへのアクセスを求めています」と表示されるので「許可」ボタンをクリックしてください.",
        tag: ["音声入力","アニメーション"]
    },
    // {
    //     name: "残響",
    //     alert: ["mic","spk"],
    //     url: "./reverberation/tatami.html",
    //     description: "音声入力にリアルタイムで畳み込み演算を行い，残響を付加した音声を出力します．起動すると「マイクへのアクセスを求めています」と表示されるので「許可」ボタンをクリックしてください.",
    //     tag: ["音声入力","音声出力"]
    // },
    // {
    //     name: "音源位置",
    //     alert: ["spk"],
    //     url: "./source_position/simulator2.html",
    //     description: "畳み込み演算により音源位置を変えた音を出力します．",
    //     tag: []
    // },
    {
        name: "フォルマントから母音を合成",
        alert: ["spk"],
        url: "./vowel_simulator/vowel.html",
        description: "フォルマント周波数から母音を合成します．マウスドラッグでリアルタイムに追従します.",
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