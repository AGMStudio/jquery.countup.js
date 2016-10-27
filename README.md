# jquery.countup.js

jquery.countup.js is a jQuery plugin that *animates* a number from zero (counting up towards it). It supports counting up:

* integers `12345`
* floats `0.1234`
* formatted numbers `1,234,567.00`

Features:

* Auto-detect for integers, floats or formatted numbers
* The plugin will also use the number of decimal places the original number is using.
* Lightweight: ~1kb
* Minimal setup


## Install

You can use npm or bower.

```
npm install jquery.countup.js
```
or
```
bower install jquery.countup.js
```

## Dependencies

Package dependencies: [jquery](https://github.com/jquery/jquery) and [waypoints](https://github.com/imakewebthings/waypoints).

## Usage

### Includes

```html
<script src="jquery.min.js"></script>
<script src="jquery.waypoints.min.js"></script>
<script src="jquery.countup.min.js"></script>
```

### HTML

```html
<span class="counter">1,498,547.00</span>
<span>$</span><span class="counter">7.99</span>
<span class="counter">1455455</span>
```

You can use `data-counter-time` and `data-counter-delay`.

```html
<span class="counter" data-counter-time="5000" data-counter-delay="50">1981</span><br><br><br>
<span class="counter" data-counter-time="100" data-counter-delay="20">9842</span><br><br><br>
```

### Jquery

```
$('.counter').countUp();
```

**or with extra parameters (default options)**

```
$('.counter').countUp({
    delay: 10,
    time: 2000
});
```

* `delay` - The delay in milliseconds per number count up
* `time` - The total duration of the count up animation

**Note:** These values are overwritten with data elements.

## Social Stuff

* Website: http://agmstudio.io/
* Twitter: [@AGMStudio_io](https://twitter.com/AGMStudio_io)
