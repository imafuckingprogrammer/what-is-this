## CSS Custom Properties

```css
:root {
  --amber: #FFA400;
  --blue: #009FFD;
  --navy: #2A2A72;
  --charcoal: #232528;
  --ice: #EAF6FF;
}
```

## Tailwind Config

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'amber': '#FFA400',
        'blue': '#009FFD',
        'navy': '#2A2A72',
        'charcoal': '#232528',
        'ice': '#EAF6FF',
      }
    }
  }
}
```

## Tailwind Classes

- `bg-amber` / `text-amber` / `border-amber`
- `bg-blue` / `text-blue` / `border-blue`
- `bg-navy` / `text-navy` / `border-navy`
- `bg-charcoal` / `text-charcoal` / `border-charcoal`
- `bg-ice` / `text-ice` / `border-ice`

## CSS Classes

```css
.bg-amber { background-color: #FFA400; }
.bg-blue { background-color: #009FFD; }
.bg-navy { background-color: #2A2A72; }
.bg-charcoal { background-color: #232528; }
.bg-ice { background-color: #EAF6FF; }

.text-amber { color: #FFA400; }
.text-blue { color: #009FFD; }
.text-navy { color: #2A2A72; }
.text-charcoal { color: #232528; }
.text-ice { color: #EAF6FF; }
```

## Hex Values

- Amber: `#FFA400`
- Blue: `#009FFD`
- Navy: `#2A2A72`
- Charcoal: `#232528`
- Ice: `#EAF6FF`