# sine-waves

A while ago I posted on my blog about using sine waves to mimic a 3D motion effect - [you can read it here](https://justinebert.com/posts/sine-waves).
I decided to package up the react component and helper class I built and release them! They're very simple - but should be extensible enough for just about any purpose.
You can take a look at this component and play around with it on the [storybook page](https://JEbertPrime.github.io/sine-waves).

### SineWave class
In order to abstract the math that goes into generating an [x,y] pair along the sine wave, I've written a helper class which takes as an argument the three characteristics of a sine wave (`phase`,`amplitude`,`frequency`) plus a `color` and `yOffset`. `phase`,`amplitude`,`frequency` and `yOffset` can take either a number or function of the type `(x, xOffset)=>number`. 

### WaveChart component
The only required prop for this component is `waves`, which takes an array of `SineWave` objects. Of course, I suppose it could also take an array of any object with a `getYFromX` method and a `color` property. By default it will start drawing the waves from the lefthand side, but setting the `startFull` prop to `true` will start drawing a wave already at full width. Otherwise it takes all the normal `canvas` props, and doesn't come with any added styling. 

## Boilerplate library code

I didn't want to set everything up myself, so I used the wonderful [react-rollup-boilerplate](https://github.com/KaiHotz/react-rollup-boilerplate?tab=readme-ov-file) by KaiHotz. It's simple and feature rich - I definitely recommend.
