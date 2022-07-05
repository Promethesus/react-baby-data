## ToDo
- Update scripts to normalize "end location" for bottle to be a number ("4.5oz" -> `4.5`)
- Update histogram to be able to display "non durations" Abstract the info
- Update histogram to have axi labels and a scale (have units in incremental)
  - This will probably require scanning the data to find the minimum and maximum values
- Make tooltip outside of histogram. (how to do this without it being in parent state. (pass an `onHover` function to `Histogram` — `CustomEvent` with `event.data` being the data point hovered over)

- Alternative: Implement [Billboard.js](https://github.com/naver/billboard.js/)
