# Mithril Js Components
Library to speed up your application development 🚀

# Example
```js
// Instead of
var myComponent = {
  view: function(){
    return m('div', {class: 'my-class'}, [
      m('input', {type: 'radio'}),
      m('input', {type: 'radio', name: 'custom-name', id: 'custom-id'})
    ])
  }
}

// You can use
var myComponent = {
  view: function(){
    return m('div', {class: 'my-class'}, [
      m(radio),
      m(radio, {name: 'custom-name', id: 'custom-id'})
    ])
  }
}
```
