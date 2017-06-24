var input = {
  view: function(vnode){
    return m('input', vnode.attrs, [vnode.children])
  }
}

var radio = {
  oninit: function(vnode){
    vnode.attrs.type = 'radio'
    this.attrs = vnode.attrs
  },
  view: function(vnode){
    return m(input, this.attrs, [vnode.children])
  }
}
