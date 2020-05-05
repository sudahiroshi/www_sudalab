# メモ

## Submoduleの更新方法

submoduleは自動更新されないので，手動で更新する必要がある．

```
$ git clone https://github.com/sudahiroshi/www_sudalab.git
$ git submodule update --init --recursive
（上2行は $ git clone https://github.com/sudahiroshi/www_sudalab.git --recursive でも良いと思われる）
ここで，freqdrawを更新したい場合，以下のようにする
$ cd freqdraw
$ git pull origin master
$ cd ..
$ git commit -am 'freqdraw updated'
$ git push
