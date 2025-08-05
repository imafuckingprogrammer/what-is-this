## CSS Custom Properties

```css
:root {
  --dark-purple: #330c2f;
  --purple: #7b287d;
  --slate-blue: #7067cf;
  --periwinkle: #b7c0ee;
  --tea-green: #cbf3d2;
}
```

## Tailwind Config

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'dark-purple': '#330c2f',
        'purple': '#7b287d',
        'slate-blue': '#7067cf',
        'periwinkle': '#b7c0ee',
        'tea-green': '#cbf3d2',
      }
    }
  }
}
```

## Tailwind Classes

- `bg-dark-purple` / `text-dark-purple` / `border-dark-purple`
- `bg-purple` / `text-purple` / `border-purple`
- `bg-slate-blue` / `text-slate-blue` / `border-slate-blue`
- `bg-periwinkle` / `text-periwinkle` / `border-periwinkle`
- `bg-tea-green` / `text-tea-green` / `border-tea-green`

## CSS Classes

```css
.bg-dark-purple { background-color: #330c2f; }
.bg-purple { background-color: #7b287d; }
.bg-slate-blue { background-color: #7067cf; }
.bg-periwinkle { background-color: #b7c0ee; }
.bg-tea-green { background-color: #cbf3d2; }

.text-dark-purple { color: #330c2f; }
.text-purple { color: #7b287d; }
.text-slate-blue { color: #7067cf; }
.text-periwinkle { color: #b7c0ee; }
.text-tea-green { color: #cbf3d2; }
```

## Hex Values

- Dark Purple: `#330c2f`
- Purple: `#7b287d`
- Slate Blue: `#7067cf`
- Periwinkle: `#b7c0ee`
- Tea Green: `#cbf3d2`