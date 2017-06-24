var input = {
  view: function(vnode){
    return m('input', vnode.attrs, [vnode.children])
  }
}

var radio = {
  oninit: function(vnode){
    vnode.attrs.type = 'radio'
  },
  view: function(vnode){
    return m(input, vnode.attrs, [vnode.children])
  }
}
