# Amia
私の好きなリズムゲームのキャラクターのゲーム内のSNSでの名前からこの名前をつけました。<br>
<s>あと、typescriptの拡張子の.tsがtestに似てますね。</s>
&nbsp;<br>
## Amia_complex
複素数の四則演算を計算するプログラムです。<br>
複素数とは、二乗して-1になる数と実数の組み合わせで出来た数のことです。<br>
&nbsp;<br>
## Amia_dual
双対数(二重数)の四則演算を計算するプログラムです。<br>
双対数(二重数)とは、虚数部分に二乗すると0になる数を用いた数のことです。<br>
例えば、自動微分などに使われます。<br>
TypeScript ver.とPython3 ver.があります。
&nbsp;<br>
### Amia_dual_patch.py
Amia_dual.pyにはない三角関数などを定義してます。
## 関数の定義
### 単項演算
全て this.func() の形です。
#### abs()
複素数の絶対値を返します。 (※Amia_complexのみ)
#### abs2()
複素数の絶対値の2乗を返します。 (※Amia_complexのみ)
#### con()
複素数や双対数(二重数)の共役な複素数や双対数を返します。
#### toString()
複素数や双対数(二重数)を文字列に変換します<br>
何かこのプログラムのcomplex型やdual_number型である変数を表示するときには、<br>
必ずこれを表示前に使ってください。<br>
&nbsp;<br>
### 2項演算
全て func(x, y) の形です。<br>
number型の変数はこの計算に使用できませんので、<br>
complex型やdual_number型に変換してから使ってください。
#### add(x, y)
足し算 xとyを足します。
#### sub(x, y)
引き算 xからyを引きます。
#### mul(x, y)
掛け算 xとyを掛けます。
#### div(x, y)
割り算 xをyで割ります。
