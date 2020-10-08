# メモ

## Submoduleの更新方法

submoduleは自動更新されないので，手動で更新する必要がある．

```
$ git clone https://github.com/sudahiroshi/www_sudalab.git
$ cd www_sudalab
$ git submodule update --init --recursive
（上2行は $ git clone https://github.com/sudahiroshi/www_sudalab.git --recursive でも良いと思われる）
ここで，freqdrawを更新したい場合，以下のようにする
$ cd freqdraw
$ git pull origin master
$ cd ..
$ git commit -am 'freqdraw updated'
$ git push
```


## Submoduleの追加方法

```
$ git clone https://github.com/sudahiroshi/www_sudalab.git --recursive
$ cd www_sudalab
ここで，synthesizerを追加したい場合，以下のようにする
$ git submodule add https://github.com/sudahiroshi/synthesizer
$ git add .
$ git commit -am 'synthesizer added'
$ git push
```

## 教材の追加方法

教材は，音響関連ならば`template_acoust.js`によって管理されている．
2行目からdataという変数に教材の情報を代入しているので，以下に従って追加する．

### 項目の内容

```
    {
        name: <シミュレータの名称>,
        alert: [  ],  // "spk": 音が鳴る, "mic": 音声入力
        url: <URL>,  // ディレクトリ名
        description: <説明>,  // 説明
        tag: [  ]  // "音声入力", "音声出力", "アニメーション"  など
    },
```

### 項目の例

```
    {
        name: "簡易シンセサイザー",
        alert: [ "spk" ],
        url: "./synthesizer/",
        description: "sin波を合成して音を生成するシミュレータです．エンベロープの調整も可能です．",
        tag: ["音声出力"]
    },
```

編集後，以下のように実行してその出力を手動でindex.jsに貼り付ける．
貼り付ける場所は，`<!--ここからシミュレータ一覧-->`と`<!--ここまでシミュレータ一覧-->`の間．

```
$ node template_accoust.js
```
