var input = {
  view: function(vnode){
    return m('input', vnode.attrs, [vnode.children])
  }
}

var radio = {
  oninit: function(vnode){
    vnode.type = 'radio'
  },
  view: function(vnode){
    return m(input, vnode.attrs, [vnode.children])
  }
}
