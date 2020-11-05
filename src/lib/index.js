const install = function(Vue, options = {}) {
  /**
   * @function inViewport: Verify binding element whether in window viewport
   */
  const { activeClass = 'active' } = options
  Vue.directive('scroll-trigger', {
    inViewport (el) {
      var rect = el.getBoundingClientRect()
      return !(rect.bottom < 0 || rect.top > window.innerHeight)
    },

    bind (el, binding) {
      el.$onScroll = () => {
        const { targetId } = binding.value
        if (!targetId) {
          binding.def.unbind(el, binding)
          return
        }
        const targetElement = document.getElementById(targetId)
        if (!targetElement) {
          binding.def.unbind(el, binding)
          return
        }
        if (binding.def.inViewport(el)) {
          // if binding element is in viewport, toggle className of targetElement
          targetElement.classList.add(activeClass)
        } else {
          // if binding element is in viewport, remove className of targetElement
          targetElement.classList.remove(activeClass)
        }
      }
      document.addEventListener('scroll', el.$onScroll)
    },

    inserted (el) {
      el.$onScroll()
    },

    unbind (el) {
      document.removeEventListener('scroll', el.$onScroll)
      delete el.$onScroll
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}